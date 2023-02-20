var numOfSubarrays = function (arr) {
  function SumOfArrElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let subArr = arr.slice(i, j + 1);
      let tempSum = SumOfArrElements(subArr);
      if (tempSum % 2 === 1) {
        count++;
      }
    }
  }
  return count % (10 ** 9 + 7);
};

console.log(numOfSubarrays([1, 2, 3])); // output: 16
