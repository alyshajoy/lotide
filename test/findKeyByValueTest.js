const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {

  it("returns the first key of an object which contains the specified value", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined if passed a string that isn't listed as a value within the object", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);
  });

});
