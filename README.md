##Kinnaris

Kinnaris wallet frontend for microkube v1.0.5

#Install Dependencies:
```
sudo usermod -aG sudo linuxUser

sudo apt install git-core curl apt-transport-https ca-certificates curl software-properties-common zlib1g-dev build-essential openssl libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev libffi-dev dirmngr --install-recommends

sudo apt install 
```

#Install Docker
```
sudo -i 

sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -&& add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

sudo apt update

sudo apt install docker-ce

sudo systemctl enable docker

systemctl status docker

sudo usermod -aG docker linuxUser

sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /bin/docker-compose

sudo chmod +x /bin/docker-compose

su - linuxUser
```

#Install NVM amd Node/NPM
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

export NVM_DIR="/home/micihelle/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm install 10.16.0

```

#Install RVM and Ruby/Rails
```
gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

curl -sSL https://get.rvm.io | bash -s stable --ruby=2.6.0 --gems=rails

source /home/linuxUser/.rvm/scripts/rvm

rvm use 2.6.0

```
#Clone Microkube
```
git clone https://github.com/rubykube/microkube.git

cd microkube

sudo nano config/app.yml (peatio 2.2.8, barong 2.2.14 tower 0.1.17, arke 0.1.9, change github repo to yours)

rake render:config

bundle

```

#Set Up Microkube Docker Images

9 images in total (rubykube/peatio, mysql, rubykube/barong, etherum/client-go, quay.io/openare/postmaster, traefik, redis, rabbitmq, vault)
``
rake service:backend

rake service:app

rake service:cryptonodes

rake service:daemons

rake service:utils
``

#Set up Front End
```
rake vendor:clone && cd vendor/frontend

npm install

yarn install

npm start (for developing)

npm run test (test script)

yarn build (for produciton build)
```

