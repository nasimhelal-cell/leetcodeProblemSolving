var majorityElement = function (nums) {
  function findMaxIndex(arr) {
    let max = arr[0];
    let index = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        index = i;
      }
    }

    return index;
  }
  
  let mainarr = [],
    mainarrlength = [];
  nums = nums.sort((a, b) => a - b);

  let i = 0;
  while (i < nums.length) {
    let a = [],
      count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        a.push(nums[i]);
        count++;
      }
    }
    mainarr.push(a);
    mainarrlength.push(a.length);
    i = i + count;
  }
  
  return mainarr[findMaxIndex(mainarrlength)].at(0);
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
