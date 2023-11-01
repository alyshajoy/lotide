const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

describe("#countOnly", () => {

  it("returns 1 when passed value that occurs only once", () => {
    assert.deepEqual(result1["Jason"], 1);
  });

  it("returns undefined when passed a value that isn't in the array", () => {
    assert.deepEqual(result1["Karima"], undefined);
  });

  it("returns 2 when passed a value that occurs twice in the array", () => {
    assert.deepEqual(result1["Fang"], 2);
  });

  it("returns undefined when passed a name we've defined as false", () => {
    assert.deepEqual(result1["Agouhanna"], undefined);
  });

});

// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);