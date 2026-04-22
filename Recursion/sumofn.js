/*
Problem: Fibonacci Number (Nth Term)
Type: Recursion + Iteration
Difficulty: Easy

Concepts:
- Recursion
- Iteration (Loop)
- Dynamic Programming (Optimization mindset)

--------------------------------------

Approach 1: Iterative (Optimal)

Explanation:
Instead of recalculating values, we build the answer step by step.

Step 1:
Start with base values:
fib(0) = 0
fib(1) = 1

Step 2:
Use two variables to track previous values

Step 3:
Loop from 2 → n and keep updating values

Step 4:
Return final computed value

Pattern: Bottom-Up (Tabulation Optimized)

Time Complexity: O(n)
Space Complexity: O(1)

--------------------------------------

Approach 2: Recursive (Brute Force)

Explanation:
We break the problem into smaller subproblems.

Step 1:
If n <= 1 → return n

Step 2:
Return:
fib(n-1) + fib(n-2)

Step 3:
Keeps calling until base case reached

Pattern: Tree Recursion

Time Complexity: O(2^n)
Space Complexity: O(n)

--------------------------------------

Solved On: 2026-04-15

Revision Plan:
Day1: 2026-04-16
Day3: 2026-04-18
Day7: 2026-04-22

--------------------------------------

Code:
*/

function fibonacciIterativeapproach(n){
    if(n <= 1) return n;

    let prev1 = 1; // fib(1)
    let prev2 = 0; // fib(0)
    
    for(let i = 2; i <= n; i++){
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

function fibonaccirecusiveapproach(n){
    if(n <= 1) return n;
    return fibonaccirecusiveapproach(n - 1) + fibonaccirecusiveapproach(n - 2);
}

console.log("Iterative:", fibonacciIterativeapproach(5));
console.log("Recursive:", fibonaccirecusiveapproach(5));

/*

--------------------------------------

Key Notes:

- Iterative is always preferred in interviews (efficient)
- Recursive is useful to understand the pattern
- This is a classic example of:
  Recursion → Optimization → DP

--------------------------------------

*/