# Kinnaris

Rubykube wallet frontend for peatio and barong

New User
-----------------------------------------------
su -
apt-get install sudo -y
sudo usermod -aG sudo app

Install Docker
------------------------------------------------------------------------------------------
sudo apt install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -

add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian stretch stable"

apt update

apt install docker-ce

systemctl status docker

sudo usermod -aG docker app

curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /bin/docker-compose

chmod +x /bin/docker-compose

Install Node - Everything here on down must be done as user 'app'
-----------------------------------------------------------------------
su - app

sudo apt-get install git-core curl build-essential openssl libssl-dev

sudo apt-get install curl software-properties-common

curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -

sudo apt-get install -y nodejs

Install More Dependencies
---------------------------------------------------------------------
sudo apt-get install curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev libffi-dev

sudo apt-get install dirmngr --install-recommends

Install rvm and ruby
---------------------------------------------------------------------
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

curl -sSL https://get.rvm.io | bash -s stable --ruby=2.6.0 --gems=rails

source /home/app/.rvm/scripts/rvm

rvm use 2.6.0

bundle

Clone and Config
----------------------------------------------------------------
git clone https://github.com/michellehettinger/kinnarisfull.git

cd microkube

sudo nano config/app.yml   (peatio 2.2.8, barong 2.2.14 tower 0.1.17, arke 0.1.9)

rake render:config

rake service:daemons

rake service:cryptonodes

rake service:all

Clone Frontend
-----------------------------------------------------------------------------
rake vendor:clone

cd vendor/frontend/

npm install

npm audit fix

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn

npm run build

serve -s build

sudo nano /etc/hosts

Put these in the file
0.0.0.0 www.app.local
0.0.0.0 monitor.app.local
0.0.0.0 peatio.app.local
0.0.0.0 barong.app.local
0.0.0.0 tower.app.local
0.0.0.0 cryptonodes.app.local
0.0.0.0 daemons.app.local
0.0.0.0 eth.app.local
0.0.0.0 ws.ranger.app.local
	
--------------------------------------------------

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React Index documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
