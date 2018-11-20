const assert = require('assert');
const lib = require('../src.js');

const { increment,
  decrement,
  map } = lib;

describe("increment", function(){
  it("should increment positive number", function(){
    assert.equal(increment(1), 2);
    assert.equal(increment(4), 5);
  });
  it("should increment negative number", function(){
    assert.equal(increment(-1), 0);
    assert.equal(increment(-4), -3);
  });
});

describe("decrement", function(){
  it("should decrement positive number", function(){
    assert.equal(decrement(1), 0);
    assert.equal(decrement(4), 3);
  });
  it("should decrement negative number", function(){
    assert.equal(decrement(-1), -2);
    assert.equal(decrement(-4), -5);
  });
});

describe("map", function(){
  describe("with increment", function(){
    it("should increment all array elements", function(){
      assert.deepEqual(map([], increment), []);
      assert.deepEqual(map([0], increment), [1]);
      assert.deepEqual(map([1], increment), [2]);
      assert.deepEqual(map([1,2], increment), [2,3]);
      assert.deepEqual(map([1,0,2], increment), [2,1,3]);
    });
  });
});

describe("map", function(){
  describe("with decrement", function(){
    it("should decrement all array elements", function(){
      assert.deepEqual(map([], decrement), []);
      assert.deepEqual(map([0], decrement), [-1]);
      assert.deepEqual(map([1], decrement), [0]);
      assert.deepEqual(map([1,2], decrement), [0,1]);
      assert.deepEqual(map([1,0,2], decrement), [0,-1,1]);
    });
  });
});
