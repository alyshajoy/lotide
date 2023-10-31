const isEqual = function(actual, expected) {
  return actual === expected;
};

// console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`)

// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (isEqual(array1[i], array2[i]) === false) {
//       return false;
//     }
//     if (i === 2 && isEqual(array1[i], array2[i]) === true){
//       return true;
//     }
//   }
// }
const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

module.exports = eqArrays;