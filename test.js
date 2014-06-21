'use strict';

var header = require('./');

describe('basicAuthHeader(user, pass)', function(){
  describe('with a password param', function(){
    it('should return the password in the base64 encoding', function(){
      var expected = 'Basic ' + (new Buffer('user:pass')).toString('base64');
      header('user', 'pass').should.eql(expected);
    });
  });

  describe('without a password param', function(){
    it('should not return the password in the base64 encoding', function(){
      var expected = 'Basic ' + (new Buffer('user')).toString('base64');
      header('user').should.eql(expected);
    });
  });
});
