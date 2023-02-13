var countOdds = function (low, high) {
  if (low % 2 === 0) low = low + 1;
  if (high % 2 === 0) high = high - 1;
  let count = 0;

  for (let i = low; i <= high; i += 2) {
    count++;
  }
  return count;
};

console.log(countOdds(3, 7));
console.log(countOdds(8, 10));
