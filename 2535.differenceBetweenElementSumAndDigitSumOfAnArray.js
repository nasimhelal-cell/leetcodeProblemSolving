/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elementSum = nums.reduce(
    (PrevNum, currentNum) => PrevNum + currentNum,
    0
  );
  let digitSum = nums
    .join("")
    .split("")
    .map((num) => +num)
    .reduce((PrevNum, currentNum) => PrevNum + currentNum, 0);
  return elementSum > digitSum ? elementSum - digitSum : digitSum - elementSum;
};
