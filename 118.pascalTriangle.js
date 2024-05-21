var generate = function (numRows) {
  let ans = [[1], [1, 1]];

  if (numRows > 2) {
    for (let i = 2; i < numRows; i++) {
      let temp = [1];

      let currentArr = ans[i - 1];
      for (let j = 1; j < currentArr.length; j++) {
        let prev = currentArr[j - 1];
        let next = currentArr[j];
        temp.push(prev + next);
      }

      temp.push(1);
      ans[i] = temp;
    }
  }

  return ans.slice(0, numRows);
};

console.log(generate(1));
