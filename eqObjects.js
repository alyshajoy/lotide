const isEqual = function(actual, expected) {
  return actual === expected;
};

const eqArrays = require("./eqArrays");

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

  if (obj1Array.length !== obj2Array.length) { // check if array lengths are equal
    finalEval = false;
  }


  for (let i = 0; i < obj1Array.length; i++) { // loop through each key/value pair to check if they match

    if (typeof obj1Array[i][1] !== typeof obj2Array[i][1]) {
      finalEval = false;
      break;
    }
    
    if (typeof obj1Array[i][1] === "object") { // if either value is an array, use eqArrays function to check for equality
      if(!eqArrays(obj1Array[i][1], obj2Array[i][1])) { // compare values
        finalEval = false;
        break;
      }
    
      if (obj1Array[i][0] !== obj2Array[i][0]) { // if the keys don't match, return false
        finalEval = false;
        break;
      } 

    }
  
    if (!Array.isArray(obj1Array[i][1]) && !Array.isArray(obj2Array[i][1])) { // if no arrays, check for matches
      if (obj1Array[i][0] !== obj2Array[i][0] || obj1Array[i][1] !== obj2Array[i][1]) {
          // check if key/value pairs are equal
        finalEval = false;
        if (finalEval === false) {
          break;
        };
        
      };
    }
  }

  return finalEval;

};

 module.exports = eqObjects;