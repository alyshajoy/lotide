const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {

  it("returns the position within the string of the given character", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").s, [8, 21]);
  });

  it("returns undefined if asked for a letter that isn't in the string", () => {
    assert.deepEqual(letterPositions("here is another string").q, undefined);
  });

});