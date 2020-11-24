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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 17);

