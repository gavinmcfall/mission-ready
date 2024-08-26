function addNums(num1, num2) {
  return num1 + num2;
}

function subtractNums(num1, num2) {
  return num2 - num1;
}

function isNumber(num) {
  return isNaN(parseInt(num));
}

function multiplyNums(num1, num2) {
  return num1 * num2;
}

function hasDoubleLetters(word) {
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      return true;
    }
  }
  return false;
}

module.exports = {
  addNums,
  subtractNums,
  isNumber,
  multiplyNums,
  hasDoubleLetters,
};
