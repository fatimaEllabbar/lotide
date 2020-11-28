const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const without = require("./without");
const takeUntil = require ("./takeUntil");
const map = require("./map");
const letterPosition = require("./letterPositions")
module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  eqArrays,
  countLetters,
  countOnly,
  assertObjectsEqual ,
  eqObjects,
  findKey,
  findKeyByValue,
  without,
  takeUntil,
  map,
  letterPosition
};