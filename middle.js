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
const middle = function (array){
  let numberOfItems = array.length;
  if (numberOfItems < 3){
    return [];
  } else if (numberOfItems % 2 === 0){
    return [ array[(numberOfItems / 2)-1 ], array[numberOfItems / 2]];
  } else {
    return [ array[Math.floor(numberOfItems / 2 )]];
  }
}
assertArraysEqual(middle([1]) ,[])// => []
assertArraysEqual(middle([1, 2]),[]) // => []
assertArraysEqual(middle([1, 2, 3]),[2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])// => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2,3])// => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4] )// => [3, 4]
