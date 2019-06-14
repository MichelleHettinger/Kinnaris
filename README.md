# MikroApp

[![Build Status](https://ci.microkube.com/api/badges/rubykube/mikroapp/status.svg)](https://ci.microkube.com/rubykube/mikroapp)

Rubykube wallet frontend for peatio and barong
---------------------------------------------------
Email: admin@barong.io, password: 0lDHd9ufs9t@
Email: john@barong.io, password: Am8icnzEI3d!
------------------------------------------------------------
su -
apt-get install sudo -y
sudo -i
sudo usermod -aG sudo michelle
-----------------------------------------------------------------------
sudo apt install git
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
sudo apt install apt-transport-https
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
sudo apt-get update
sudo apt-get install sublime-text
--------------------------------------------------------------------
sudo apt-get install git-core curl build-essential openssl libssl-dev
sudo apt-get install curl software-properties-common
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt-get install -y nodejs
---------------------------------------------------------------------
groupadd michelle
useradd -d /home/michelle -s `which bash` -g michelle -m michelle
-------------------------------------------------------------------
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian stretch stable"
apt update
apt install docker-ce
systemctl status docker
usermod -aG docker michelle
curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /bin/docker-compose
chmod +x /bin/docker-compose
sudo apt update
sudo apt upgrade
sudo apt-get install curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev libffi-dev
sudo apt-get install dirmngr --install-recommends
---------------------------------------------------------------------
su - michelle
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
curl -sSL https://get.rvm.io | bash -s stable --ruby=2.6.0 --gems=rails
source /home/michelle/.rvm/scripts/rvm
rvm use 2.6.0
----------------------------------------------------------------
git clone https://github.com/rubykube/microkube.git
cd microkube
sudo nano config/app.yml (peatio 2.2.3, barong 2.2.2 tower 0.1.17, arke 0.1.9)
bundle
rake render:config
rake service:all
rake vendor:clone
cd vendor/frontend/
npm install
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
