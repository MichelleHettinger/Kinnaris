const phs = require('password-hash-and-salt');
const User = require("../models/user.js");
const CryptoJS = require("crypto-js");

module.exports = function(app){

  //After entering user name and password and clicking submit, they are brought to this route
  app.get('/authenticate/:encodedEmail/:encodedHash', function(req, res) {
    //start decrypting here
    const userInfo = {
      email: decodeURIComponent(req.params.encodedEmail),
      password: CryptoJS.AES.decrypt(decodeURIComponent(req.params.encodedHash), 'michelle is totally awesome').toString(CryptoJS.enc.Utf8)
    };
    
    User.findOne({'email': userInfo.email}).exec(function(err, userObj){
      if (err){
        console.log('----------------');
        console.log(err);
        console.log('----------------');
        res.redirect('/');
      } else if (userObj === null) {
        console.log('----------------');
        console.log('User not found');
        console.log('-----------------');
        res.send({});
      }
      else {
        const userSavedHash = userObj.hash;

        phs(userInfo.password).verifyAgainst(userSavedHash, function(error, verified){
          if(error)
              throw new Error('There was an error while comparing hashes.');
              //This error crashes the server. Make sure to come back and handle it.
          if (!verified) {
              console.log('--------------------');
              console.log("Incorrect password");
              console.log('--------------------');
              res.send({});
          } else {
              console.log('-----------------');
              console.log("Access granted");
              console.log('-----------------');
              res.send(userObj);
          }
        });
      }
    });
  });

  app.post('/register/:encodedEmail/:encodedHash', function(req, res) {
    //start decrypting here
    const user = new User({
      email: decodeURIComponent(req.params.encodedEmail),
      hash: decodeURIComponent(req.params.encodedHash),
      date: Date.now()
    });

    user.save(function(err, userObj) {
      if (err){
        console.log('---------------------');
        console.log("User already exists");
        console.log('---------------------');
        res.redirect('/');
      } else {
        console.log('----------------');
        console.log("Saving new user");
        console.log('----------------');
        res.send(userObj);
      }
    });
  });
}