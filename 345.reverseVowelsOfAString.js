/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split("");
  let el = [],
    indexEl = [];
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u" ||
      s[i] === "A" ||
      s[i] === "E" ||
      s[i] === "I" ||
      s[i] === "O" ||
      s[i] === "U"
    ) {
      indexEl.push(i);
      el.push(s[i]);
      s[i] = null;
    }
  }

  let reversed = el.reverse();
  for (let i = 0; i < indexEl.length; i++) {
    s[indexEl[i]] = reversed[i];
  }
  return s.join("");
};
