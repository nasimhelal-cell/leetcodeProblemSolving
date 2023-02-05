var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else if (digits[i] <= 8) {
      digits[i] += 1;
      break;
    }
  }
  digits[0] === 0 && digits.unshift(1);
  return digits;
};

console.log(plusOne([9, 9, 9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([8, 9]));
console.log(plusOne([9, 9]));
console.log(plusOne([4, 3, 2, 1]));
