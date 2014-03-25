var map    = require('./');
var assert = require('assert');

describe('language map', function () {
  describe('module', function () {
    it('should export an object with languages as the keys', function () {
      assert.equal(map['Python'].primaryExtension, '.py');
      assert.equal(map['JavaScript'].primaryExtension, '.js');
    });
  });
});
