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

# postgresql

* sudo apt update
* sudo apt install postgresql postgresql-contrib

* The default admin user, postgres, needs a password assigned in order to connect to a database. To set a password:

    * Enter the command: sudo passwd postgres

* There are 3 commands you need to know once PostgreSQL is installed:

    * status for checking the status of your database.
        * sudo service postgresql 
    
    * to start running your database.
        * sudo service postgresql start 
    
    * stop to stop running your database.
        * sudo service postgresql 

* https://chloesun.medium.com/set-up-postgresql-on-wsl2-and-connect-to-postgresql-with-pgadmin-on-windows-ca7f0b7f38ab


