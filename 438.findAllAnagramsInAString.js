/**=======================
 * first solution but Runtime error
 * =======================
 */
// var findAnagrams = function (s, p) {
//   p = p.split("").sort().join("");
//   let mainCombination = [],
//     result = [],
//     i = 0;
//   while (i < s.length - p.length + 1) {
//     let a = [];
//     for (let j = i; j <= i + p.length - 1; j++) {
//       a.push(s[j]);
//     }
//     mainCombination.push(a.sort().join(""));
//     i++;
//   }
//   for (let i = 0; i < mainCombination.length; i++) {
//     mainCombination[i] === p && result.push(i);
//   }
//   return result;
// };

// console.log(findAnagrams("cbaebabacd", "abc"));

/**=======================
 * second solution but Time Limit Exceeded
 * =======================
 */
// var findAnagrams = function (s, p) {
//     p = p.split("").sort().join("");
//     let result = [],
//       i = 0;
//     while (i < s.length - p.length + 1) {
//       let a = [];
//       for (let j = i; j <= i + p.length - 1; j++) {
//         a.push(s[j]);
//       }
//       a.sort().join("") === p && result.push(i);
//       i++;
//     }

//     return result;
//   };

//   console.log(findAnagrams("cbaebabacd", "abc"));

/**=======================
 * third solution but Runtime error
 * =======================
 */
// var findAnagrams = function (s, p) {
//   p = p.split("").sort().join("");
//   let result = [],
//     i = 0;
//   while (i < s.length - p.length + 1) {
//     s.substr(i, p.length).split("").sort().join("") === p && result.push(i);
//     i++;
//   }

//   return result;
// };

// console.log(findAnagrams("cbaebabacd", "abc"));

/**=======================
 * fourth solution sliding window method
 * =======================
 */

const findAnagrams = (s, p) => {
  let res = [],
    n = s.length,
    m = p.length,
    pCount = Array(26).fill(0),
    windowCount = Array(26).fill(0);

  for (let i = 0; i < m; i++) pCount[p.charCodeAt(i) - 97]++;

  for (let i = 0; i < n; i++) {
    windowCount[s.charCodeAt(i) - 97]++;
    if (i >= m) windowCount[s.charCodeAt(i - m) - 97]--;
    if (windowCount.toString() === pCount.toString()) res.push(i - m + 1);
  }
  return res;
};
console.log(findAnagrams("cbaebabacd", "abc"));
