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

module.exports = middle;