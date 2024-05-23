/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function hasDif2(arr, k) {
  if (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (Math.abs(arr[i] - arr[j]) === k) {
          return true;
        }
      }
    }
  }
  return false;
}

var beautifulSubsets = function (nums, k) {
  let result = [];

  function decimalToBinary(decimalNumber) {
    return decimalNumber.toString(2).padStart(nums.length, "0");
  }

  for (let i = 1; i < Math.pow(2, nums.length); i++) {
    let temp = decimalToBinary(i).split("");

    let temp2 = [];
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === "1") {
        temp2.push(nums[j]);
      }
    }

    if (!hasDif2(temp2, k)) {
      result.push(temp2);
    }
  }

  return result.length;
};

console.log(beautifulSubsets([4, 2, 5, 9, 10, 3], 1));
