const assert = require('assert');

const { countDigits, prettify, truncateNumber } = require('../src/prettifyNumber.js')

describe('number.js', function() {
  describe('prettify', function() {
    it('should return "1M" for 1000000', function() {
      const result = prettify(1000000)
      const expected = '1M'
      assert.strictEqual(result, expected);
    });

    it('should return "2.5M" for 2500000.34', function() {
      const result = prettify(2500000.34)
      const expected = '2.5M'
      assert.strictEqual(result, expected);
    });
    
    it('should return "532" for 532', function() {
      const result = prettify(532)
      const expected = '532'
      assert.strictEqual(result, expected);
    });

    it('should return "1.1B" for 1123456789', function() {
      const result = prettify(1123456789)
      const expected = '1.1B'
      assert.strictEqual(result, expected);
    });

    it('should return "9.5T" for 9487634567534', function() {
      const result = prettify(9487634567534)
      const expected = '9.5T'
      assert.strictEqual(result, expected);
    });

    it('should return unsupported if too high', function() {
      const result = prettify(1000000000000000)
      const expected = 'Number too high; unsupported'
      assert.strictEqual(result, expected);
    });
  });

  describe('countDigits', function() {
    it('should return 3 for 123', function() {
      const result = countDigits(123)
      const expected = 3
      assert.strictEqual(result, expected);
    });

    it('should return 7 for 1000000', function() {
      const result = countDigits(1000000)
      const expected = 7
      assert.strictEqual(result, expected);
    });
  });

  describe('truncateNumber', function() {
    it('should return 1.2 for 121', function() {
      const result = truncateNumber(121)
      const expected = 1.2
      assert.strictEqual(result, expected);
    });

    it('should return 1.2 for 12345', function() {
      const result = truncateNumber(12345)
      const expected = 1.2
      assert.strictEqual(result, expected);
    });
  });
});