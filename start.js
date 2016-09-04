//soundtouch discovery api
var soundTouchDiscovery = require('./discovery');

//required for udp
var dgram = require('dgram');
//udp configuration
var PORT = 9989;
var HOST = '192.168.0.17'; //
var client = dgram.createSocket('udp4');


soundTouchDiscovery.search(function(deviceAPI) {

    console.log(deviceAPI.name + " --> " + deviceAPI.getDevice().ip);

    deviceAPI.isAlive(function(json) {
        console.log(deviceAPI.name + ' --> isAlive: ' + json);
    });

    deviceAPI.isPoweredOn(function(json) {
        console.log(deviceAPI.name + ' --> isPoweredOn: ' + json);
    });

    deviceAPI.getVolume(function(json) {
        console.log(deviceAPI.name + ' --> Volume: ', json.volume.actualvolume);
    });

    deviceAPI.getNowPlaying(function(json) {
        console.log(deviceAPI.name + ' --> Now playing: ', json.nowPlaying.ContentItem);
    });


    //SOCKETS

    deviceAPI.socketStart();

    deviceAPI.setPoweredListener(function(poweredOn, nowPlaying) {
        console.log(poweredOn ? 'Powered On' : 'Powered Off');
    });

    deviceAPI.setIsPlayingListener(function(poweredOn) {
        console.log(poweredOn ? 'Playing' : 'Not playing');
    });

    deviceAPI.setVolumeUpdatedListener(function(volume, json) {
        console.log("VOLUME UPDATED", volume, json);
    });

    deviceAPI.setNowPlayingUpdatedListener(function(json) {
        console.log("NOW PLAYING UPDATED", json);
    });

    deviceAPI.setNowSelectionUpdatedListener(function(json) {
      console.log("NOW SELECTION UPDATED", json);
      var msg = new Buffer(json.preset.id);
      sendMessage(msg);
    });

    soundTouchDiscovery.stopSearching();
});
sendMessage = function(message){
  client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
      if (err) throw err;
      console.log('UDP message sent to ' + HOST +':'+ PORT);
      //client.close();
  });
};
var socketCloseHandler = function () {
    socket = undefined;
    socketUsers = 0;
    if (undefined !== releaseTimeout) {
        clearTimeout(releaseTimeout);
        releaseTimeout = undefined;
    }
};
