const letterPositions = function(sentence) {
  const results = {};
  // const noSpaces = sentence.split(" ").join("");
  let count = 0;
  
  for (const letter of sentence) {
    if (letter === " ") {
      count += 1;
    } else if (results[letter]) {
      results[letter].push(count);
      count += 1;
    } else {
      results[letter] = [count];
      count += 1;
    }
  }

  return results;
};

module.exports = letterPositions;