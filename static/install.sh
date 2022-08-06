#!/bin/bash

RED='\033[0;31m'
ORANGE='\033[1;33m'
NC='\033[0m' # No RED

echo -e "${RED} Starting ${ORANGE}install.sh! ${NC} \n"

echo -e "${RED} Updating... ${NC} \n"
sleep 2
sudo apt-get update
sudo apt-get upgrade

sudo apt-get install figlet
figlet -c "saklani.dev"


echo -e "\n ${RED} Installing ${ORANGE} NVM... ${NC} \n"
sleep 2
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

echo -e "\n ${RED} Installing ${ORANGE} Node... ${NC} \n"
sleep 2
nvm install node

echo -e "\n ${RED} Installing ${ORANGE} Git... ${NC} \n"
sleep 2
sudo apt-get install git -y
git --version

echo -e "\n ${RED} Installing ${ORANGE} Nginx... ${NC} \n"
sleep 2
sudo apt-get install nginx -y

echo -e "\n ${RED} Installing ${ORANGE} Go... ${NC} \n"
sleep 2
sudo apt install golang-go -y

echo -e "\n ${ORANGE} Done!! ${NC}"
echo -e "${RED} Packages Installed: ${ORANGE}Node, NVM, Yarn, Git, Docker, Nginx, Go ${NC} \n"
sleep 2