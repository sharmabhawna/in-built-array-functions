const assert = require('assert');
const { map, filter, reduce } = require('../src/lib.js'); 

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

const isOdd = function(number) {
  return number % 2;
}

const sum = function(a,b) {
  return a+b;
}

const findGreater = function(a,b) {
  return a > b ? a : b;
}

const findLesser = function(a,b) {
  return a < b ? a : b;
}

describe("map", function(){
  it("of empty array should return empty array", function(){
      assert.deepEqual(map([], increment), []);
      assert.deepEqual(map([], decrement), []);
      assert.deepEqual(map([], square), []);
      assert.deepEqual(map([], cube), []);
    });
  it("of array of arity 1 should return array of arity 1 containing mapped value", function(){
      assert.deepEqual(map([1], increment), [2]);
      assert.deepEqual(map([1], decrement), [0]);
      assert.deepEqual(map([1], square), [1]);
      assert.deepEqual(map([1], cube), [1]);
    });
  it("of array of any arity should return array of same arity with all of them mapped", function(){
      assert.deepEqual(map([-1,-2], increment), [0,-1]);
      assert.deepEqual(map([1,0,2], increment), [2,1,3]);
      assert.deepEqual(map([-1,-2], decrement), [-2,-3]);
      assert.deepEqual(map([-1,0,-2], decrement), [-2,-1,-3]);
      assert.deepEqual(map([-1,-2], square), [1,4]);
      assert.deepEqual(map([1,0,2], square), [1,0,4]);
      assert.deepEqual(map([-1,-2], cube), [-1,-8]);
      assert.deepEqual(map([-1,0,-2], cube), [-1,0,-8]);
  });
});

describe("filter", function(){
  it("of empty array should return empty array", function(){
      assert.deepEqual(filter([], isEven), []);
      assert.deepEqual(filter([], isOdd), []);
  });
  it("of array of any arity containing all truthy values should return same array", function(){
      assert.deepEqual(filter([2], isEven), [2]);
      assert.deepEqual(filter([2,4], isEven), [2,4]);
      assert.deepEqual(filter([1], isOdd), [1]);
      assert.deepEqual(filter([1,3], isOdd), [1,3]);
  });
  it("of array of any arity containing all falsy values should return same array", function(){
      assert.deepEqual(filter([1], isEven), []);
      assert.deepEqual(filter([1,3], isEven), []);
      assert.deepEqual(filter([2], isOdd), []);
      assert.deepEqual(filter([2,4], isOdd), []);
  });
  it("of array containing miscellaneous values should return array of truthy values", function(){
    assert.deepEqual(filter([1,2,3,4], isEven), [2,4]);
    assert.deepEqual(filter([1,2,3,4], isOdd), [1,3]);
  });
});

describe("reduce", function(){
  it("of empty array with initial value should return initial value", function(){
    assert.equal(reduce([], sum, 5), 5);
    assert.equal(reduce([], findGreater, 5), 5);
    assert.equal(reduce([], findLesser, 5), 5);
  });
});
