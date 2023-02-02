var lengthOfLastWord = function (s) {
  let a = s.split(" ");
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i].length) return a[i].length;
  }
};