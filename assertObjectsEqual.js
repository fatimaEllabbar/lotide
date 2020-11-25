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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if( Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  } else {
    for (const key of Object.keys(object1)){
      if(! object2.hasOwnProperty(key)){
        return false;
      } else {
        if( Array.isArray(object2[key]) && Array.isArray(object1[key])) {
          if ( eqArrays(object2[key],object1[key]) === false){
            return false;
          }
        }
        else {
          if ( object2[key] !== object1[key] ){
            return false;
          }
        }
      }
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects (actual, expected) === true){
     console.log(`${String.fromCodePoint(0x2705)}${String.fromCodePoint(0x2705)}${String.fromCodePoint(0x2705)}Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)}${String.fromCodePoint(0x274C)}${String.fromCodePoint(0x274C)}Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  // Implement me!
};

assertObjectsEqual({ a: '1', b: 1 } ,{ b: 11, a: '1' });