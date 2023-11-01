const flatten = require("../flatten");
const assert = require("chai").assert;

describe("#flatten", () => {

  it("returns [1, 2, 3, 4] when passed [1, [2, 3], 4]", () => {
    assert.deepEqual(flatten([1, [2, 3], 4]), [1, 2, 3, 4]);
  });

  it("returns empty array when passed an empty array", () => {
    assert.deepEqual(flatten([]), []);
  });

  it("returns flattened array when there are multiple nested arrays", () => {
    assert.deepEqual(flatten([[1, 2], [3, 4]]), [1, 2, 3, 4]);
  });

});