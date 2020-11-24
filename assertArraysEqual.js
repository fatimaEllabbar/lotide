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

assertArraysEqual([1,2,3],[1,2]);
assertArraysEqual([1,2,"3"],[1,2,3]);