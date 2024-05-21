function xorOf(array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res = res ^ array[i];
  }
  return res;
}

var subsetXORSum = function (nums) {
  let result = 0;
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
    result = result + xorOf(temp2);
  }

  return result;
};

console.log(subsetXORSum([3, 4, 5, 6, 7, 8]));
