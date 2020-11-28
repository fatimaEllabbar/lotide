const chai = require('chai');
const assert = chai.assert;
const assertArraysEqual = require ("../assertArraysEqual");

describe("#assertArraysEqual", function() {
  it("should return the tow arrays are different ", function() {
    assert.equal(assertArraysEqual([1,2,3],[1,2]),`The tow arrays are different`);
  });
  it("should return the tow arrays are different ", function() {
    assert.equal(assertArraysEqual([1,2,"3"],[1,2,3]),`The tow arrays are different`);
  });
  it("should return the tow arrays are the same", function() {
    assert.equal(assertArraysEqual([1,2,3],[1,2,3]),`The tow arrays are the same`);
  });
});

