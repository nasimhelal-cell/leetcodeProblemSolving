var checkPerfectNumber = function (num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
