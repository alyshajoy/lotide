const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {

  it("returns [] if given an array with only one item", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [2] if given [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] if given an array of 2 items", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [3] if given [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] if given [1, 2, 3, 4", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] if given [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});
