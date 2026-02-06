// leetcode - 121

const prices = [7, 1, 5, 3, 6, 4];

const maxProfit = function  (prices) {
    let maxProfit = 0, profit = 0;
    let minVal = prices[0];  // Stores the lowest cp till i

    for (let i = 1; i < prices.length; i++) {
        profit = prices[i] - minVal;
        maxProfit = Math.max(maxProfit, profit);
        minVal = Math.min(minVal, prices[i]);
    }

    return maxProfit;
}

console.log(maxProfit(prices));
