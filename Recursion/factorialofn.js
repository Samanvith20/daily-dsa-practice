
/*
Problem: Factorial of a Number
Type: Recursion / Math
Difficulty: Easy

Concepts:
- Recursion
- Base Case
- Multiplicative Reduction

--------------------------------------

Approach: Recursive Multiplication

Explanation:
We multiply the current number with the factorial of the previous number.

Step 1:
Take current number (n)

Step 2:
Multiply with factorial(n - 1)

Step 3:
Stop when n == 0 (base case → return 1)

⚠️ Important:
Factorial of 0 is 1

Pattern: Decreasing Recursion (Multiplication)

Time Complexity: O(n)
Space Complexity: O(n)  // recursion stack
Solved On: 2026-04-14
Revision Plan:
Day1:2026-04-15
Day3:2026-04-17
Day7:2026-04-21

--------------------------------------

Code:
*/

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log("Factorial:", factorial(5));

/*

--------------------------------------



*/