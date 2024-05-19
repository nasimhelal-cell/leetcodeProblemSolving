/**
 * @param {string} columnTitle
 * @return {number}
 */
function getSerialNum(str) {
  return str.charCodeAt() - 64;
}

var titleToNumber = function (columnTitle) {
  let length = columnTitle.length;
  let i = 0,
    res = 0;
  while (i < length) {
    res = res * 26 + getSerialNum(columnTitle[i]);
    i++;
  }
  return res;
};
