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
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`😍😍😍 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`)
  }
};

const middle = function (array) {
  if (array.length < 3) {
    return [];
  } else {
    if (array.length % 2 === 1) {
      return [array[Math.floor(array.length / 2)]];
    } else {
      return [array[(array.length / 2) - 1], array[(array.length / 2)]];
    }
  }
}

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []);
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]