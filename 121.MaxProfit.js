var maxProfit = function (prices) {
  let max_profit = 0;
  let index = 0;

  for (let i = 0; i < prices.length; i++) {
    let current_profit = prices[i] - prices[index];

    if (current_profit > 0) {
      if (current_profit > max_profit) {
        max_profit = current_profit;
      }
    } else index = i;
  }
  return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
