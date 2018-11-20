const assert = require('assert');
const lib = require('../src.js');

const { increment } = lib;

describe("increment", function(){
  it("should increment positive number", function(){
    assert.equal(increment(1), 2);
  });
});
