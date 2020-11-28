
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
module.exports = middle;
