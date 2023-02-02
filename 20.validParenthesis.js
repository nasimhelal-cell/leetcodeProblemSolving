/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let sArr = s.split("");
  let fc = [...sArr],
    sc = [...sArr],
    tc = [...sArr];

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "(") {
      fc = fc
        .splice(i + 1)
        .join("")
        .includes(")");
    }
    if (sArr[i] === "{") {
      sc = sc
        .splice(i + 1)
        .join("")
        .includes("}");
    }
    if (sArr[i] === "[") {
      tc = tc
        .splice(i + 1)
        .join("")
        .includes("]");
    }
  }
  return fc && sc && tc ? true : false;
};
console.log(isValid("([)]"));

