var hammingWeight = function (n) {
  n = n.toString(2);
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (n.charAt(i) == "1") {
      count++;
    }
  }
  return count;
};
console.log(hammingWeight("00000000000000000000000000001011"));
