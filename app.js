var async = require('asyncawait/async');
var await = require('asyncawait/await');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var a = fs.readFileAsync('data.txt', 'utf8');
a.then(function(v){console.log(v)});

var b = await(fs.readFileAsync('data.txt', 'utf8'));
