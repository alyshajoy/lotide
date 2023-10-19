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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])) // => false

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])) // => false