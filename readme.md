# ToDo PERN

## install node js:
* sudo apt update && sudo apt upgrade

## It is always recommended to remove any existing installations of Node.js 

It is always recommended to remove any existing installations of Node.js or npm from your operating system before installing a version manager as the different types of installation can lead to strange and confusing conflicts. For example, the version of Node that can be installed with Ubuntu's apt-get command is currently outdated. For help with removing previous installations, see How to remove nodejs from ubuntu.)

* Install cURL (a tool used for downloading content from the internet in the command-line) with: 
    * sudo apt-get install curl

* Install nvm, with: 
    * curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

* sudo apt update && sudo apt upgrade
* restart terminal 
* command -v nvm 
    * should return nvm
* nvm install --lts