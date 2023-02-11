var myAtoi = function (s) {
  s = s.trim();
  let ans = parseInt(s);
  if (ans >= -2147483648 && ans <= 2147483647) {
    return ans;
  }
};

console.log(myAtoi("     -42"));
console.log(myAtoi("42"));
console.log(myAtoi("     -42 nasim jnhdfjh"));
console.log(myAtoi("4193 with words"));
