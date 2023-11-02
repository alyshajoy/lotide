const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

const currentCity = {
  name: "Airdrie",
  province: "Alberta",
  population: "100,000"
};

const sameCity = {
  name: "Airdrie",
  province: "Alberta",
  population: "100,000"
};

const prevCity = {
  name: "Calgary",
  province: "Alberta",
  population: "1.3 million"
};

describe("#eqObjects", () => {

  it("returns true if the two objects match", () => {
    assert.deepEqual(eqObjects(currentCity, sameCity), true);
  });

  it("returns false if the two objects passed in are not the same", () => {
    assert.deepEqual(eqObjects(currentCity, prevCity), false);
  });

  it("returns true when two objects are the same, even if the order they are in is different", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium"};
    const anotherMultiColorShirtObject = {size: "medium", colors: ["red", "blue"]};
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  })

});
