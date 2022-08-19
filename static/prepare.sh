#!/bin/bash

RED="\e[31m"
GRAY="\e[90m"
ORANGE='\033[1;33m'
NC='\033[0m' # No RED

echo -e "${RED} Starting ${ORANGE}prepare.sh! ${NC} \n"

echo -e "${RED} Updating... ${NC} \n"
sleep 2

echo -e ${GRAY}
sudo apt-get update
sudo apt-get upgrade
echo -e ${NC}


echo -e ${GRAY}
sudo apt-get install figlet
echo -e ${NC}

figlet -c "saklani.dev"

installed=()

echo -e "\n ${RED} Installing ${ORANGE} Git... ${NC} \n"
sleep 2
echo -e ${GRAY}
sudo apt-get install git -y
git --version
echo -e ${NC}
installed+=("git")

while true; do
    read -p " Install NVM/Node?  " yn
    case $yn in
        [Yy]* ) 
            echo -e "\n ${RED} Installing ${ORANGE} NVM... ${NC} \n"
            sleep 2

            echo -e ${GRAY}
            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
            export NVM_DIR="$HOME/.nvm"
            [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
            [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
            echo -e ${NC}

            echo -e "\n ${RED} Installing ${ORANGE} Node... ${NC} \n"
            sleep 2
            echo -e ${GRAY}
            nvm install node
            echo -e ${NC}

            installed+=("NVM")
            installed+=("Node")

            break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done

while true; do
    read -p " Install Nginx?  " yn
    case $yn in
        [Yy]* ) 
            echo -e "\n ${RED} Installing ${ORANGE} Nginx... ${NC} \n"
            sleep 2
            echo -e ${GRAY}
            sudo apt-get install nginx -y
            echo -e ${NC}

            installed+=("Nginx")
            break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done

while true; do
    read -p " Install Go?  " yn
    case $yn in
        [Yy]* ) 
            echo -e "\n ${RED} Installing ${ORANGE} Go... ${NC} \n"
            sleep 2
            echo -e ${GRAY}
            sudo apt install golang-go -y
            echo -e ${NC}

            installed+=("Go")
            break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done

echo -e "\n${ORANGE}  Done!! ${NC}"
echo -e "${RED}  Packages Installed:  ${ORANGE}"
for str in ${installed[@]}; do
  echo "    $str"
done
echo -e ${NC}

sleep 2
