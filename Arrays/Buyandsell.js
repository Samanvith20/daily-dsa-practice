/*

Problem: Best Time to Buy and Sell Stock
Type: Greedy / Array Traversal
Difficulty: Easy
practice: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

Concepts:
- Greedy Approach
- Tracking Minimum Value
- Profit Maximization

Explanation:
We track the minimum price so far.
At each step:
- Calculate profit = current price - min price
- Update max profit if larger
- Update min price if smaller

Pattern: Greedy, Single Pass

Time Complexity: O(n)
Space Complexity: O(1)

Solved On: 2026-04-07

Revision Plan:
Day1: 2026-04-08
Day3: 2026-04-10
Day7: 2026-04-14

*/

function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}

console.log("Max Profit:", maxProfit([7,1,5,3,6,4]));