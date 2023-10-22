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



const takeUntil = function(array, callback) {
  let index = 0;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      index = i;
      break;
    }
  }
  
  result = array.slice(0, index);
  return result;

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ["love", "joy", "peace", "patience", "blech", "goodness", "kindness"];
const results3 = takeUntil(data3, x => x === "blech");
console.log(results3);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3, ["love", "joy", "peace", "patience"]);