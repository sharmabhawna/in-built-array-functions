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

const reduce = function(array, reducer, accumulator) {
  let index = 0;
  if(accumulator == undefined){
    index = 1;
    accumulator = array[0];
  }
  for(index; index < array.length; index++){
    result = reducer(array[index], accumulator);
    accumulator = result;
  }
  return accumulator;
}

module.exports = { map,
  filter,
  reduce };
