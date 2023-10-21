const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};


const isEqual = function(actual, expected) {
  return actual === expected;
};


const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (!isEqual(array1[i], array2[i])) {
      return false;
    }
  }

  return true;
};

console.log("test array function:", eqArrays(["red", "blue"], ["red", "blue"]));

const eqObjects = function(object1, object2) {

  const obj1Array = Object.entries(object1); // turn obj1 into array to be able to check length
  const obj2Array = Object.entries(object2); // turn obj 2 into array to check length
  let finalEval = true;

  const orderArray = function(array) { // function to put the arrays in alphabetical order
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i][0] > array[i + 1][0]) {
        let removed = array.splice(i, 1)[0];
        array.splice((i + 1), 0, removed);
      }
    }
  }

  orderArray(obj1Array); // order first array
  orderArray(obj2Array); // order second array

  // console.log("ordered arrays:", obj1Array, obj2Array);

  if (obj1Array.length !== obj2Array.length) { // check if array lengths are equal
    finalEval = false;
  }

  console.log("1:", finalEval);

  for (let i = 0; i < obj1Array.length; i++) { // loop through each key/value pair to check if they match
    // console.log("type1:", typeof obj1Array[i][1], "type2:", typeof obj2Array[i][1]);
    // console.log("check matching keys:", obj1Array[i][0], obj2Array[i][0]);
    // console.log("check matching values:", obj1Array[i][1], obj2Array[i][1]);
    if (typeof obj1Array[i][1] !== typeof obj2Array[i][1]) {
      finalEval = false;
      console.log("2:", finalEval);
      break;
    }
    
    if (typeof obj1Array[i][1] === "object") { // if either value is an array, use eqArrays function to check for equality
      console.log("compare values:", obj1Array[i][1], obj2Array[i][1], "compare keys:", obj1Array[i][0], obj2Array[i][0]);
      if(!eqArrays(obj1Array[i][1], obj2Array[i][1])) { // compare values
        console.log("compare in loop:", obj1Array[i][1], obj2Array[i][1]);
        finalEval = false;
        console.log("3:", finalEval);
        break;
      }
    
      if (obj1Array[i][0] !== obj2Array[i][0]) { // if the keys don't match, return false
        finalEval = false;
        console.log("4:", finalEval);
        break;
      } 

    }
    console.log("refresh of array contents:", obj1Array, obj2Array);
    if (!Array.isArray(obj1Array[i][1]) && !Array.isArray(obj2Array[i][1])) { // if no arrays, check for matches
      if (obj1Array[i][0] !== obj2Array[i][0] || obj1Array[i][1] !== obj2Array[i][1]) {
        console.log("Mismatch detected at index", i);
        console.log("Key:", obj1Array[i][0], obj2Array[i][0]);
        console.log("Value:", obj1Array[i][1], obj2Array[i][1]);
          // check if key/value pairs are equal
        finalEval = false;
        if (finalEval === false) {
          console.log("5:", finalEval);
          break;
        };
        
      };
    }
  }

  return finalEval;

};

const currentCity = {
  name: "Airdrie",
  province: "Alberta",
  population: "100,000"
};

const sameCity = {
  name: "Airdrie",
  province: "Alberta",
  population: "100,000"
};

const prevCity = {
  name: "Calgary",
  province: "Alberta",
  population: "1.3 million"
};

assertEqual(eqObjects(currentCity, sameCity), true); // true
assertEqual(eqObjects(currentCity, prevCity), false); // false

 const multiColorShirtObject = { colors: ["red", "blue"], size: "medium"};
 const anotherMultiColorShirtObject = {size: "medium", colors: ["red", "blue"]};
 assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

 const longSleeveMultiColorShirtObject = {size: "medium", colors: ["red", "blue"], sleeveLength: "long"};
 assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);