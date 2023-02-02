/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  else if (n === 1) return true;
  else return !(n - 1).toString(2).includes("0");
};
