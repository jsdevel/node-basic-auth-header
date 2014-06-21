'use strict';

module.exports = function(name, pass){
  var seperator = pass ? ':' : '';

  pass = pass || '';

  return 'Basic ' + new Buffer(name + seperator + pass).toString('base64');
};
