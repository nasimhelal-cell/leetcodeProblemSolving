var subsets = function (nums) {
  let result = [];
  function decimalToBinary(decimalNumber) {
    return decimalNumber.toString(2).padStart(nums.length, "0");
  }

  for (let i = 0; i < Math.pow(2, nums.length); i++) {
    let temp = decimalToBinary(i).toString().split("");

    let temp2 = [];
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === "1") {
        temp2.push(nums[j]);
      }
    }
    result.push(temp2);
  }

  return result;
};

console.log(subsets([0]));
