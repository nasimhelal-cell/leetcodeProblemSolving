var isSubsequence = function (s, t) {
  let sT = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[sT] === t[i]) {
      sT++;
    }
  }
  return sT === s.length;
};
