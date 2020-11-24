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
const without = function (source, itemsToRemove){
  let newArray = [];
  for (let i = 0 ;i < source.length; i++){
    let index = false;
    for (let j = 0; j < itemsToRemove.length; j++){
      if (itemsToRemove[j] === source[i]){
        index = true;
      }
    }
    if (index === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

assertArraysEqual(without([1, 2, 3], [1]) ,[2, 3])// => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),[ "2"]) // => ["1", "2"]
