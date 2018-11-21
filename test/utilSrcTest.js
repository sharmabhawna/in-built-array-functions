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

const isEven = function(number) {
  return number % 2 == 0;
}

module.exports = { increment,
  decrement,
  square,
  cube,
  isEven };
