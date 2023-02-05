/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let ans = 0;
  for (let i = 1; i * i <= x; i++) {
    ans = i;
  }
  return ans;
};
console.log(mySqrt(0));
