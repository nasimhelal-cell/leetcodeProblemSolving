/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandAroundCenter(s, i, i);
    let evenPalindrome = expandAroundCenter(s, i, i + 1);
    let currentLongest =
      oddPalindrome.length > evenPalindrome.length
        ? oddPalindrome
        : evenPalindrome;
    if (currentLongest.length > longest.length) {
      longest = currentLongest;
    }
  }
  return longest;

  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }
};
