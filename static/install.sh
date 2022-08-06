COLOR='\033[1;33m'
echo -e "${COLOR} Starting install.sh!"

echo -e "${COLOR} Updating..."
sleep 1
sudo apt update
sudo apt upgrade

echo -e "${COLOR} Installing NVM..."
sleep 1
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

echo -e "${COLOR} Installing Node..."
sleep 1
nvm install node

echo -e "${COLOR} Installing Yarn..."
sleep 1
npm install -g yarn

echo -e "${COLOR} Installing Git..."
sleep 1
sudo apt install git-all
git --version

echo -e "${COLOR} Installing Docker..."
sleep 1
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce
sudo docker run hello-world
docker --version

echo -e "${COLOR} Installing nginx..."
sleep 1
sudo apt-get install nginx

echo -e "${COLOR} Installing Go..."
sleep 1
sudo apt install golang-go 

echo -e "${COLOR} Done!!"
sleep 1