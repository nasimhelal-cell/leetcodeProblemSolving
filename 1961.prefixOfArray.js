var isPrefixString = function (s, words) {
  let accumulatedString = "";

  for (let word of words) {
    accumulatedString += word;
    if (accumulatedString === s) {
      return true;
    }
    if (accumulatedString.length > s.length) {
      return false;
    }
  }

  return false;
};

let s = "iloveleetcodeapples",
  words = ["i", "love", "leetcode", "apples"];
console.log(isPrefixString(s, words));
