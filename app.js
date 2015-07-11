var async = require('asyncawait/async');
var await = require('asyncawait/await');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var f = async(function() {
  await(Promise.delay(500));
  return await(21);
})

function g() {
  f().then(function(x){console.log(x)});
}

g();
