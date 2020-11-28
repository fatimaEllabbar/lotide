

const chai = require('chai');
const assert = chai.assert;
const assertArraysEqual = require ("../assertArraysEqual");
const middle = require("../middle");

describe("#middle", function() {
  it("should return [] for [1]", function() {
    assert.deepEqual(middle([1]) ,[]);
  });
  it("should return [] for [1.2]", function() {
    assert.deepEqual(middle([1, 2]),[]);
  });
  it("should return [2] for [1,2,3]", function() {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });
  it("should return [3,4] for [1,2,3,4,5,6]", function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
  });

});

