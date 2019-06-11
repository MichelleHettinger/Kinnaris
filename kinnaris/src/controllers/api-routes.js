const path = require("path");
const User = require("../models/user.js");
const CryptoJS = require("crypto-js");

module.exports = function(app) {

  app.post('/saveCompound/:encodedUserID/:newCompoundString', function(req, res) {
    //Decoding and parsing
    const userObjId = decodeURIComponent(req.params.encodedUserID);
    const newCompoundString = req.params.newCompoundString.replace(/\^/g, ',').replace(/\$/g, '.');
    let newCompoundObj = JSON.parse(newCompoundString);
    newCompoundObj.elements = Object.keys(newCompoundObj.elements).map(key=>newCompoundObj.elements[key]);

    User.findOneAndUpdate(
      {'_id': userObjId},
      {$push: {'compounds': newCompoundObj}},
      {new: true}
    ).exec(function(err, userObj) {
      if (err){
        console.log('----------------');
        console.log(err);
        console.log('----------------');
        res.redirect('/');
      } else {
        res.send(userObj);
      }
    });
  });

  app.post('/deleteCompound/:encodedUserID/:encodedCompoundName', function(req, res) {
    //Decoding and parsing
    const userObjId = decodeURIComponent(req.params.encodedUserID);
    const oldCompoundName = decodeURIComponent(req.params.encodedCompoundName);

    User.findOneAndUpdate(
      {'_id': userObjId},
      { $pull: {'compounds': {'chemicalName': oldCompoundName}} },
      {new:true}
    ).exec(function(err, userObj) {
      if (err){
        console.log('----------------');
        console.log(err);
        console.log('----------------');
        res.redirect('/');
      } else {
        res.send(userObj);
      }
    });

  });
}