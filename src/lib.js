const map = function(array, mapper) {
  let result = [];
  for(value of array){
    result.push(mapper(value));
  }
  return result;
}

const filter = function(array, predicate) {
  let result = [];
  for(value of array){
    if(predicate(value)){
      result.push(value);
    }
  }
  return result;
}

module.exports = { map,
  filter };
