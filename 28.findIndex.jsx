/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let needleLength = needle.length;
  let heyLength = haystack.length;

  // If needle is an empty string, return 0
  if (needleLength === 0) {
    return 0;
  }

  // Calculate the correct stopping point for the loop
  let stop = heyLength - needleLength;

  for (let i = 0; i <= stop; i++) {
    // Extract the substring from haystack
    let cut = haystack.slice(i, needleLength + i);
    if (cut === needle) {
      return i;
    }
  }
  return -1;
};
