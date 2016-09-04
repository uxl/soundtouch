#Bose SoundTouch
Project borrows geertsmichael's node project (https://github.com/CONNCTED/SoundTouch-NodeJS) to translate websocket traffic from button presses into UDP communications for a unity project.

## Installation

## System Dependencies
( Load these files if you don't have them already )
Python 2.7

On Mac may need to install brew
``` sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

No SUDO version of node  
``` sh
brew install node --without-npm
mkdir "${HOME}/.npm-packages"
echo NPM_PACKAGES="${HOME}/.npm-packages" >> ${HOME}/.bashrc
echo prefix=${HOME}/.npm-packages >> ${HOME}/.npmrc
curl -L https://www.npmjs.org/install.sh | sh
echo NODE_PATH=\"\$NPM_PACKAGES/lib/node_modules:\$NODE_PATH\" >> ${HOME}/.bashrc
echo PATH=\"\$NPM_PACKAGES/bin:\$PATH\" >> ${HOME}/.bashrc
echo source "~/.bashrc" >> ${HOME}/.bash_profile
source ~/.bashrc
```

Start the server to make use of the HTTP API

```bash
git clone https://github.com/uxl/soundtouch.git
cd soundtouch
npm install
node start.js
```
