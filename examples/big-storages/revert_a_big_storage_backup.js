// requires
var transip = require('../../lib/transip.js')();

// module variables
const config = require('../config.json');
const demo_token = config.demo_token;

var params = {
  action: 'revert'
};

const backupId = 123;
const bigStorageName = 'bigStorageName';

transip.bigstorages.revert(params, backupId, bigStorageName, demo_token, function(err,response) {
  if (err) {
    return console.log(err);
  }
  else {
    console.log(response);
  }
});
