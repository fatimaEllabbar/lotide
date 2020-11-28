
const tail = function(array){
  if(array === undefined){
    return undefined;
  }
  return array.slice(1);
}
module.exports = tail;

