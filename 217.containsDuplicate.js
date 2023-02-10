var containsDuplicate = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let ans = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      ans = true;
      break;
    }
  }
  return ans;
};
//1,1,2,3
console.log(containsDuplicate([1, 2, 3, 4]));
