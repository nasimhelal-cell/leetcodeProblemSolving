/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (map[char]) {
      stack.push(char);
    } else if (stack.length === 0 || map[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]"));
