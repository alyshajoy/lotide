const assertEqual = function(actual, expected) {
  return actual === expected;
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (assertEqual(array1[i], array2[i]) === false) {
      return false;
    }
    if (i === 2 && assertEqual(array1[i], array2[i]) === true) {
      return true;
    }
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`😍😍😍 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function(array, takeOut) {
  let newArray = array;
  for (let i = 0; i < newArray.length; i++) {
    for (let n = 0; n < takeOut.length; n++) {
      if (newArray[i] === takeOut[n]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};

console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
console.log(without([1, 2, 3], [1]));