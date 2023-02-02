var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        count++;
        break;
      }
    }

    if (count === 0) return nums[i];
  }
};
