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
const takeUntil = function(array, callback) {
  let results = [];
  for( let item of array){
    if(!callback(item)){
      results.push(item);
    }
    else {
      return results;
    }
  }
  return results;

}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
