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
const countLetters = function(sentence){
  let results = {};

  for ( const letter of sentence){
    if (letter !== " "){
      if(results[letter]){
        results[letter] += 1; 
      } else {
        results[letter] = 1; 
      }
    } 
  }
  return results;
}
console.log(countLetters("lighthouse in the house"))