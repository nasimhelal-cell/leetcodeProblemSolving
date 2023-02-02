/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length < 53 && b.length < 53)
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);

  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};
