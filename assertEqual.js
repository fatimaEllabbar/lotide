
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
   return `${String.fromCodePoint(0x2705)}${String.fromCodePoint(0x2705)}${String.fromCodePoint(0x2705)}Assertion Passed: ${quote1}${actual}${quote1} === ${quote2}${expected}${quote2}`;
  } else {
    return `${String.fromCodePoint(0x274C)}${String.fromCodePoint(0x274C)}${String.fromCodePoint(0x274C)}Assertion Failed: ${quote1}${actual}${quote1} !== ${quote2}${expected}${quote2}`;
  }
};

module.exports = assertEqual;


