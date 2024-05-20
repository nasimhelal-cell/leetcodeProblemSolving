function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

var firstPalindrome = function (words) {
  for (let word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return "";
};

console.log(firstPalindrome(["e", "abc", "car", "ada", "racecar", "cool"]));
