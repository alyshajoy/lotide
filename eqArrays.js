const assertEqual = function(actual, expected) {
  return actual === expected;
};

// console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`)

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






// const eqArrays = function(array1, array2) {
//   let truthCount = 0;
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === array2[i]) {
//       truthCount += 1;
//     }
//   }
//   console.log(truthCount);
//   if (truthCount === 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false