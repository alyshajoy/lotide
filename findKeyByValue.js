const flatten = require('./flatten');

const findKeyByValue = function(object, find) {

  let wantedValue = [];
  let objectValues = Object.entries(object);
  let flatArray = flatten(objectValues);

  for (let i = 0; i < flatArray.length; i++) {
    if (flatArray[i] === find) {
      wantedValue.push(flatArray[i - 1]);
      break;
    }
  }

  return wantedValue[0];

}

module.exports = findKeyByValue;