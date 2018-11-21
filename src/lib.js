const map = function(array, mapper) {
  let result = [];
  for(let i = 0; i < array.length; i++){
    result.push(mapper(array[i]));
  }
  return result;
}

const filter = function(array, predicate) {
  let result = [];
  for(let i = 0; i < array.length; i++){
    if(predicate(array[i])){
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = { map,
  filter };
