var reverseString = function (s) {
  let len = s.length;
  let start = 0;
  let last = len - 1;

  while (start <= last) {
    let startChar = s[start];
    let lastChar = s[last];
    s[start] = lastChar;
    s[last] = startChar;

    start++;
    last--;
  }

  return s;
};

let s = ["h", "e", "l", "l", "o"];

console.log(reverseString(s));
