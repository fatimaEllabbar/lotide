const chai = require('chai');
const assert = chai.assert;
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

describe("#eqArrays", function() {
  it("should return assertion passed if the arrays are equal to [1, 2, 3]", function() {
    assert.equal(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true),`✅✅✅Assertion Passed: true === true`);
  });
  it("should return assertion passed if the arrays are equal to []", function() {
    assert.equal(assertEqual(eqArrays([], []),true),`✅✅✅Assertion Passed: true === true`);
  });
  it("should return assertion failed if the arrays are equal to [1, 2, 3] and [3, 2, 1]", function() {
    assert.equal(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),true),`❌❌❌Assertion Failed: false !== true`);
  });
  it("should return assertion failed if the arrays are equal to [1, 2, 3] and [3]", function() {
    assert.equal(assertEqual(eqArrays([1, 2, 3], [3]),true),`❌❌❌Assertion Failed: false !== true`);
  });
  it("should return assertion failed if the arrays are equal to [1, 2, 3] and []", function() {
    assert.equal(assertEqual(eqArrays([1, 2, 3], []),true),`❌❌❌Assertion Failed: false !== true`);
  });


})