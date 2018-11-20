const assert = require('assert');
const lib = require('../src.js');

const { increment,
  decrement } = lib;

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
