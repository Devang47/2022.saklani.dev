#!/bin/bash

RED='\033[0;31m'
ORANGE='\033[1;33m'
NC='\033[0m' # No RED

sudo apt install figlet
figlet -c "saklani.dev"

echo -e "${RED} Starting ${ORANGE}install.sh! ${NC} \n"

echo -e "${RED} Updating... ${NC} \n"
sleep 1
sudo apt update
sudo apt upgrade

echo -e "${RED} Installing NVM... ${NC} \n"
sleep 1
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

echo -e "${RED} Installing Node... ${NC} \n"
sleep 1
nvm install node

echo -e "${RED} Installing Yarn... ${NC} \n"
sleep 1
npm install -g yarn

echo -e "${RED} Installing Git... ${NC} \n"
sleep 1
sudo apt install git-all
git --version

echo -e "${RED} Installing Docker... ${NC} \n"
sleep 1
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce
sudo docker run hello-world
docker --version

echo -e "${RED} Installing nginx... ${NC} \n"
sleep 1
sudo apt-get install nginx

echo -e "${RED} Installing Go... ${NC} \n"
sleep 1
sudo apt install golang-go 

echo -e "${RED} Done!! ${NC} \n"
sleep 1