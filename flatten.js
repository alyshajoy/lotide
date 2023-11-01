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