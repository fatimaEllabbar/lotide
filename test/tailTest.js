
const chai = require("chai");
const assert = chai.assert;
const tail = require("../tail");

describe("#tail", function() {
  it(`returns  ["Lighthouse", "Labs"] for["Hello", "Lighthouse", "Labs"]`, function() {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
  assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it(`should return [] for [1]`, function() {
    const result = tail([1]);
    assert.deepEqual(result, []);
  });
  

});