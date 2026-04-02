/*

Problem: Count Negative Numbers in an Array
Type: Basics / Array Traversal
Difficulty: Easy
Practice: Custom / Interview Style

Concepts:
- Array Validation (Array.isArray)
- Type Checking (typeof, Number.isFinite)
- Iteration (for...of)

Explanation:
We first validate input:
- Must be an array
- Must contain only finite numbers

Then we iterate through the array and count values < 0.

Pattern: Iteration, Validation

Time Complexity: O(n)
Space Complexity: O(1)

Solved On: 2026-04-02

Revision Plan:
Day1: 2026-04-03
Day3: 2026-04-05
Day7: 2026-04-09

*/

function countNegatives(arr) {
  if (!Array.isArray(arr)) return false;

  let count = 0;

  for (let num of arr) {
    if (typeof num !== "number" || !Number.isFinite(num)) {
      return false;
    }

    if (num < 0) count++;
  }

  return count;
}

console.log(countNegatives([-1, 2, -3, 4])); 