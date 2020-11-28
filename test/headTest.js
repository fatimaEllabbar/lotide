
const chai = require("chai");
const assert = chai.assert;
const assertEqual = require("../assertEqual");
const head = require("../head");

describe("#head", function() {

  it("shoud return assertion passed if the head of the array  [5,6,7] is 5",function() {
  assert.equal(assertEqual(head([5,6,7]),5),`✅✅✅Assertion Passed: 5 === 5`)  ;
  });

  it(`shoud return assertion failed  if the head of the array  ["Hello", "Lighthouse", "Labs"] is "Labs"`,function() {
  assert.equal(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs"),`❌❌❌Assertion Failed: "Hello" !== "Labs"`)  ;
  });

  it("shoud return assertion passed if the head of the array  [] is undefined",function() {
  assert.equal(assertEqual(head([]),undefined),`✅✅✅Assertion Passed: "undefined" === "undefined"`)  ;
  });

  it("shoud return assertion passed if the array  is undefined",function() {
  assert.equal(assertEqual(head(),),`✅✅✅Assertion Passed: "undefined" === "undefined"`)  ;
  });
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
   

});
