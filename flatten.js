const assertEqual = function(actual, expected) {
  return actual === expected;
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (assertEqual(array1[i], array2[i]) === false) {
      return false;
    }
    if (i === 2 && assertEqual(array1[i], array2[i]) === true){
      return true;
    }
  }
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`😍😍😍 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`)
  }
}


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

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;