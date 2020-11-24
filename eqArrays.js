// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let quote1 = "";
  let quote2= "";
  if ( isNaN(actual)){
      quote1 = "\"";
  } 
  if ( isNaN(expected)){
    quote2 = "\"";
  } 
  if( actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)}${String.fromCodePoint(0x2705)}${String.fromCodePoint(0x2705)}Assertion Passed: ${quote1}${actual}${quote1} === ${quote2}${expected}${quote2}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)}${String.fromCodePoint(0x274C)}${String.fromCodePoint(0x274C)}Assertion Failed: ${quote1}${actual}${quote1} !== ${quote2}${expected}${quote2}`)
  }
};

const eqArrays = function (firstArray, secondArray){
  let index = true;
  if (firstArray.length !== secondArray.length){
    index = false;
  } else {
    for (let i = 0; i < firstArray.length; i++){
      if (firstArray[i] !== secondArray[i]){
        index = false;
      }
    }
  }
  return index;   
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true)// => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),true) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should PASS
