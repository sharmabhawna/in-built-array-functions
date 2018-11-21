const map = function(array, func) {
  let result = [];
  for(let i = 0; i < array.length; i++){
    result.push(func(array[i]));
  }
  return result;
}

const filter = function(array, func) {
  let result = [];
  for(let i = 0; i < array.length; i++){
    if(func(array[i])){
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = { map,
  filter };
