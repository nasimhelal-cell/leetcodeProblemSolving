var summaryRanges = function (nums) {
  let ans = [];
  let p = 0;
  let q = 0;

  for (let i = 0; i < nums.length; i++) {
    let gap = nums[i + 1] - nums[i];
    if (gap !== 1) {
      p = i + 1;
      let temp = nums.slice(q, p);
      ans.push(format(temp));
      if (p != q) {
        q = p;
      }
    }
  }
  return ans;
};

function format(arr) {
  let temp = [];
  if (arr.length > 1) {
    temp = [arr[0], arr[arr.length - 1]];
  } else {
    temp = [arr[0]];
  }
  return temp.join("->");
}

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
