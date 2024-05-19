var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }

  const charToWord = {};
  const wordToChar = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (charToWord.hasOwnProperty(char)) {
      if (charToWord[char] !== word) {
        return false;
      }
    } else {
      charToWord[char] = word;
    }

    if (wordToChar.hasOwnProperty(word)) {
      if (wordToChar[word] !== char) {
        return false;
      }
    } else {
      wordToChar[word] = char;
    }
  }

  return true;
};

let pattern = "abba";
let s = "dog dog dog dog";
console.log(wordPattern(pattern, s));
