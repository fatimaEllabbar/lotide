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
const assertArraysEqual = function (firstArray, secondArray){
  if( eqArrays(firstArray,secondArray) === true){
    console.log("The tow arrays are the same");
  } else {
    console.log("The tow arrays are different");
  }
}

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  // temporary code:
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);

