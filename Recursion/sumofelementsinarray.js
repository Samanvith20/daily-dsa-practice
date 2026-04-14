/*
Problem: Sum of Array
Type: Recursion / Array
Difficulty: Easy

Concepts:
- Recursion
- Base Case
- Index Traversal

--------------------------------------

Approach: Recursive Traversal

Explanation:
We recursively add elements of the array starting from the last index.

Step 1:
Start from last index → (array.length - 1)

Step 2:
Add current element + recursive call for previous index

Step 3:
Stop when index reaches 0 (base case)

Pattern: Backward Recursion (Index Based)

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

let array = [4, 5, 6, 7, 8, 9];

function sumrecursive(n) {
    if (n === 0) return array[n];   // base case
    return array[n] + sumrecursive(n - 1);
}

console.log("Sum:", sumrecursive(array.length - 1));

/*

--------------------------------------


*/