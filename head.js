const assertEqual = require('./assertEqual');

const head = function(array){
  firstElement = array.shift();
  return firstElement;
}

module.exports = head;