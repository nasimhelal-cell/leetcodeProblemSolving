/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let absVal = Math.abs(x).toString();
  absVal = [...absVal].reverse().join("");

  if (absVal > Math.pow(2, 31)) {
    return 0;
  } else {
    return x > 0 ? +absVal : Number(-absVal);
  }
};
