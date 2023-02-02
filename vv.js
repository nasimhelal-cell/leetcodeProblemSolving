var singleNumber = function (nums) {
  let init = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        init = i;
        break;
      }
    }
  }
  return init;
};
console.log(singleNumber([4, 1, 2, 1, 2]));
