const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};

const flatten = function(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const nestedArray = array[i];
      for (let n = 0; n < nestedArray.length; n++) {
        newArray.push(nestedArray[n]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}


const findKeyByValue = function(object, find) {

  let wantedValue = [];
  let objectValues = Object.entries(object);
  let flatArray = flatten(objectValues);

  for (let i = 0; i < flatArray.length; i++) {
    if (flatArray[i] === find) {
      wantedValue.push(flatArray[i - 1]);
      break;
    }
  }

  return wantedValue[0];

}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const childrenAges = {
  Noah: 11,
  Coleton: 9,
  Graham: 8,
  Juniper: 3
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(childrenAges, 8), "Graham");
assertEqual(findKeyByValue(childrenAges, 2), undefined);

module.exports = findKeyByValue;