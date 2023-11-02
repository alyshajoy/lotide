let eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#eqArrays", () => {

  it("returns true when passed two identical arrays", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false when passed two arrays with same values but in different order", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns false when passed arrays with similar values, but of different types", () => {
    assert.deepEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false);
  });

  it("returns true if passed identical arrays with only one value", () => {
    assert.deepEqual(eqArrays([12], [12]), true);
  });

});