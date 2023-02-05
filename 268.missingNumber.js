var missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let n = nums.length;
  let ans = [],
    i = 0;
  while (i <= n) {
    if (i !== nums[i]) {
      ans.push(i);
    }
    i++;
  }
  return ans[0];
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([3, 0, 1]));
