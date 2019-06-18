Kinnaris<br>
---------------------------------------------------
Kinnaris wallet frontend for microkube v1.0.5<br>
Install Dependencies:<br>
```
sudo usermod -aG sudo linuxUser<br>
sudo apt install git-core curl apt-transport-https ca-certificates curl software-properties-common zlib1g-dev build-essential openssl libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev libffi-dev dirmngr --install-recommends<br>
sudo apt install<br>
```
Install Docker<br>
---------------------------------------------------
```
sudo -i 
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -&& add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"<br>
sudo apt update<br>
sudo apt install docker-ce<br>
sudo systemctl enable docker<br>
systemctl status docker<br>
sudo usermod -aG docker linuxUser<br>
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /bin/docker-compose<br>
sudo chmod +x /bin/docker-compose<br>
```
Install Yarn<br>
---------------------------------------------------
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && echo "deb https://dl.$<br>
sudo apt-get update && sudo apt-get install --no-install-recommends yarn<br>
su - linuxUser<br>
```
Install NVM amd Node/NPM<br>
---------------------------------------------------
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash <br>
export NVM_DIR="/home/micihelle/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" <br>
nvm install 10.16.0 <br>

```
Install RVM and Ruby/Rails<br>
---------------------------------------------------
```
gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB<br>
curl -sSL https://get.rvm.io | bash -s stable --ruby=2.6.0 --gems=rails<br>
source /home/linuxUser/.rvm/scripts/rvm <br>
rvm use 2.6.0 <br>
```
Clone Microkube<br>
---------------------------------------------------
```
git clone https://github.com/rubykube/microkube.git<br>
cd microkube<br>
sudo nano config/app.yml (peatio 2.2.8, barong 2.2.14 tower 0.1.17, arke 0.1.9, change github repo to yours)<br>
rake render:config<br>
bundle<br>
./bin/install_webhook<br>
```
Set Up Microkube Docker Images<br>
---------------------------------------------------
```
docker-compose up -d gateway proxy redis vault db redis rabbitmq peatio barong postmaster geth ranger withdraw_audit blockchain global_state deposit_collection deposit_collection_fees deposit_coin_address slave_book pusher_market pusher_member matching order_processor trade_executor withdraw_coin k <br>
rake db:create
```
Set up Front End<br>
---------------------------------------------------
```
rake vendor:clone && cd vendor/frontend<br>
npm install<br>
yarn install<br>
npm start (for developing)<br>
npm run test (test script)<br>
yarn build (for produciton build)<br>
```
Adjust hosts file<br>
---------------------------------------------------
sudo nano /etc/hosts<br>
Put these in the file:<br>
0.0.0.0 www.app.local<br>
0.0.0.0 monitor.app.local<br>
0.0.0.0 peatio.app.local<br>
0.0.0.0 barong.app.local<br>
0.0.0.0 tower.app.local<br>
0.0.0.0 cryptonodes.app.local<br>
0.0.0.0 daemons.app.local<br>
0.0.0.0 eth.app.local<br>
0.0.0.0 ws.ranger.app.local<br>