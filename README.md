##Kinnaris

Rubykube wallet frontend for peatio and barong

Install Dependencies:
```
su -

sudo usermod -aG sudo linuxUser

sudo apt-get install git-core curl apt-transport-https ca-certificates curl software-properties-common zlib1g-dev build-essential openssl libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev libffi-dev install dirmngr --install-recommends
```

Install Docker
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian stretch stable"

sudo apt update

sudo apt install docker-ce

systemctl status docker

sudo usermod -aG docker linuxUser

curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /bin/docker-compose

chmod +x /bin/docker-compose
```

Install NVM amd Node/NPM
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

nvm install node 10.16.0

nvm use node 10.16.0

```

Install RVM and Ruby/Rails
```

```
asd
```

```
asfd








rake db:load (does create + migrate)
rake service:backend
rake service:app
rake service:cryptonodes
rake service:daemons

9 total images

rubykube/peatio
mysql
rubykube/barong
ethereum/client-go
quay.io/openware/postmaster
traefik
redis
rabbitmq
vault

npm install
yarn install
npm start
yarn build




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
