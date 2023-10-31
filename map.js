const eqArrays = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
  
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`😍😍😍 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`)
  }
};



const words = ["God", "is", "love", "and", "love", "is", "real"];

const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }  

  return results;
};

const words2 = ["hello", "world"];
const results2 = map(words2, word => word[0]);

const results1 = map(words, word => word[0]);

const trySomeMath = [5, 7, 2, 10];
const mathResults = map(trySomeMath, num => num * 10);
assertArraysEqual(mathResults, [50, 70, 20, 100]);

const pigLatinish = ["who", "are", "you"];
const pigResults = map(pigLatinish, word => word += "ay");
assertArraysEqual(pigResults, ["whoay", "areay", "youay"]);

assertArraysEqual(results1, ["G", "i", "l", "a", "l", "i", "r"]);
assertArraysEqual(results2, ["h", "w"]);

module.exports = map;