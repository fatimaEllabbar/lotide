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

const findKey = function( obj, callback){
  for ( let key of Object.keys(obj) ){
    if(callback(obj[key])){
        return key;
    }
  }

  return undefined;
}

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) ,"noma")// => "noma"
