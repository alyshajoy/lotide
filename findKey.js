const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(object, callback) {

  for (const key in object) {

    if (callback(object[key])) {
      return key;
    }

  }

};


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const object2 = {
  Juniper: {middle: "Aliva"},
  Noah: {middle: "Michael"},
  Coleton: {middle: "Parker"},
  Graham: {middle: "Thomas"}
};

assertEqual(findKey(object, x => x.stars === 2), "noma");

assertEqual(findKey(object2, x => x.middle === "Thomas"), "Graham"); 

module.exports = findKey;