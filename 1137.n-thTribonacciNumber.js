/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let ns = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    ns[i] = ns[i - 1] + ns[i - 2] + ns[i - 3];
  }
  return ns[n];
};
