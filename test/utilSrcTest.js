const increment = function(number) {
  return ++number;
}

const decrement = function(number) {
  return --number;
}

const square = function(number) {
  return number*number;
}

const cube = function(number) {
  return square(number)*number;
}

module.exports = { increment,
  decrement,
  square,
  cube };
