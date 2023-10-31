const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {

  it("returns '['wassup', 'cool', 'yoyo]' when given '['hey', 'wassup', 'cool', 'yoyo']", () => {
    assert.deepEqual(tail(["hey", "wassup", "cool", "yoyo"]), ["wassup", "cool", "yoyo"]);
  });

  it("returns [] when given '[test]'", () => {
    assert.deepEqual(tail(['test']), []);
  });

  it("returns '['Lighthouse', 'Labs']' when given '['Yo Yo', 'Lighthouse', 'Labs']'", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("should keep the original array untouched", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  })

})
