var maximumProduct = function (nums) {
  nums = nums.sort((a, b) => b - a);
  console.log(nums);
  return nums[0] * nums[1] * nums[2];
};
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
