const assertEqual = function(actual, expected) {
  return actual === expected;
};

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
  
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`😍😍😍 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`)
  }
}

const letterPositions = function(sentence) {
  const results = {};
  // const noSpaces = sentence.split(" ").join("");
  let count = 0;
  
  for (const letter of sentence) {
    if (letter === " ") {
      count += 1;
    } else if (results[letter]) {
      results[letter].push(count);
      count += 1;
    } else {
      results[letter] = [count];
      count += 1;
    }
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21]);

module.exports = letterPositions;