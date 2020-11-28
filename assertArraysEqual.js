const eqArrays = require('./eqArrays');

const assertArraysEqual = function (firstArray, secondArray){
  if( eqArrays(firstArray,secondArray) === true){
    return "The tow arrays are the same";
  } else {
    return "The tow arrays are different";
  }
}
module.exports = assertArraysEqual;