const phs = require('password-hash-and-salt');
const User = require("../models/user.js");
const CryptoJS = require("crypto-js");

module.exports = function(app){

  app.get('/authenticate/:encodedEmail/:encodedHash', function(req, res) {
    const email = decodeURIComponent(req.params.encodedEmail);
    const encryptedPassword = decodeURIComponent(req.params.encodedPassword);
    const whatUserTyped = CryptoJS.AES.decrypt(encryptedPassword, 'michelle is totally awesome').toString(CryptoJS.enc.Utf8);

    const userInfo = {
      username: email,
      password: whatUserTyped,
    };

    User.findOne({'email': email}).exec(function(err, userObj){
      console.log(userObj);
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

        phs(whatUserTyped).verifyAgainst(userSavedHash, function(error, verified){
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
    const userEmail = decodeURIComponent(req.params.encodedEmail);
    const hash = decodeURIComponent(req.params.encodedHash);
    
    const user = new User({
      email: userEmail,
      password: hash,
      date: Date.now(),
      compounds: [],
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