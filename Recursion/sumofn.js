/*
Problem: Sum of First N Numbers
Type: Recursion / Math
Difficulty: Easy

Concepts:
- Recursion
- Mathematical Reduction

--------------------------------------

Approach: Simple Recursion

Explanation:
We reduce the problem size by subtracting 1 each time.

Step 1:
Add current number (n)

Step 2:
Call function with (n - 1)

Step 3:
Stop when n == 0

Pattern: Decreasing Recursion

Time Complexity: O(n)
Space Complexity: O(n)
Solved On: 2026-04-14

Revision Plan:
Day1:2026-04-15
Day3:2026-04-17
Day7:2026-04-21

--------------------------------------

Code:
*/

function sumOfN(n) {
    if (n === 0) return 0;
    return n + sumOfN(n - 1);
}

console.log("Sum of N:", sumOfN(5));

/*

--------------------------------------



*/