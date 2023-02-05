var findGCD = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let b = nums[0];
  let a = nums[nums.length - 1];
  return gcd(a, b);

  function gcd(a, b) {
    return a % b === 0 ? b : gcd(b, a % b);
  }
};

console.log(findGCD([2, 5, 6, 9, 10]));
