const path = require('path');
const PeatioSdk = require('peatio-sdk');

module.exports = function(app) {
  app.get(`/authenticate/`, function(req, res) {

    const peatioApi = new PeatioSdk.MarketsApi();

    const txid = 'txid_example'; // {String} 

    peatioApi.getV2Markets(function(error, data, response){
      if (error) {
        console.error(error.status);
        console.log(data);
        res.send({});
      } else {
        console.log('API called successfully.');
        res.send(response);
      }
    })
  })
}