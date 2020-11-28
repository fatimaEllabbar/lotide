
const chai = require("chai");
const assert = chai.assert;
const assertEqual = require('../assertEqual');

describe("#assertionEqual", function() {
  it("should return assertion passed if the two parametres are the same", function() {
  assert.equal(assertEqual("Bootcamp", "Bootcamp"),`✅✅✅Assertion Passed: "Bootcamp" === "Bootcamp"`);
  });
  it("should return assertion failed if the two parametres are not the same", function() {
    assert.equal(assertEqual("Lighthouse Labs", "Bootcamp"),`❌❌❌Assertion Failed: "Lighthouse Labs" !== "Bootcamp"`);
  });
  it("should return assertion failed if the two parametres are not the same", function() {
    assert.equal(assertEqual(1, 17),`❌❌❌Assertion Failed: 1 !== 17`);
  });

});
