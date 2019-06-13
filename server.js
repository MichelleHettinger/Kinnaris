const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const PeatioSdk = require('peatio-sdk');
const defaultClient = PeatioSdk.ApiClient.instance;
const jwt = defaultClient.authentications['jwt'];
const session = require('express-session');
const methodOverride = require('method-override');
const httpProxy = require('http-proxy');
const mongoose = require('mongoose');
const proxy = httpProxy.createProxyServer().listen(8001);
const app = express();
const port = process.env.PORT || 8000;
const publicPath = path.resolve(__dirname, './dist');

// A dependency on a Mongoose model for articles.
const User = require('./src/models/user.js');

const db = mongoose.connection;
mongoose.connect('mongodb://localhost/kinnaris');

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

//app.set('jwtSecret', "CODINGROCKS");
//app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));
jwt.accessToken = 'CODINGROCKS';
// Logging and public Path
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static(publicPath));
app.use(methodOverride('_method')); // override with POST having ?_method=DELETE

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Expose-Headers', 'X-Pagination');
  next();
});

// Proxy all assets to webpack dev server
app.all('/src/assets/*', (req, res) => {
  proxy.web(req, res, {
    target: 'http://localhost:8080',
  });
});

require('./src/controllers/html-routes.js')(app); 
require('./src/controllers/auth-routes.js')(app); 
require('./src/controllers/api-routes.js')(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
