var removeDuplicates = function (nums) {
  let numberOfElements = nums.length;

  if (numberOfElements === 0) return 0;

  let index = 1; // if there have at least one element then first element is sit in the array first position and ans will be minimum 1

  for (let i = 1; i < numberOfElements; i++) {
    let prevEl = nums[i - 1];
    let currentEl = nums[i];

    if (prevEl !== currentEl) {
      nums[index++] = currentEl;
    }
  }
  return index;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
