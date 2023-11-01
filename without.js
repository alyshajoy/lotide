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

module.exports = without;