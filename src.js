const increment = function(number) {
  return ++number;
}

const decrement = function(number) {
  return --number;
}

const map = function(array, func) {
  let result = [];
  for(let i = 0; i < array.length; i++){
    result.push(func(array[i]));
  }
  return result;
}

module.exports = { increment,
  decrement,
  map };
