/*

Problem: Find Smallest Number in an Array
Type: Basics / Array Traversal
Difficulty: Easy
Practice: Custom / Interview Style

Concepts:
- Array Validation (Array.isArray)
- Type Checking (typeof, Number.isFinite)
- Iteration (for...of)
- Initialization Strategy (Infinity vs arr[0])

Explanation:
We first validate input:
- Must be an array
- Must not be empty
- Must contain only finite numbers

To find the smallest number:
- Initialize with first element (arr[0]) OR Infinity
- Traverse the array and update when a smaller number is found

IMPORTANT:
- Do NOT use -Infinity for minimum → nothing is smaller than -Infinity
- Use Infinity OR arr[0]

Pattern: Iteration, Comparison (Min Tracking)

Time Complexity: O(n)
Space Complexity: O(1)

Solved On: 2026-04-02

Revision Plan:
Day1: 2026-04-03
Day3: 2026-04-05
Day7: 2026-04-09

*/

function findSmallest(arr) {
  // Edge case 1: invalid input
  if (!Array.isArray(arr)) return false;

  // Edge case 2: empty array
  if (arr.length === 0) return null;

  let smallestnumber = arr[0];

  for (let num of arr) {
    // Edge case 3: invalid values inside array
    if (typeof num !== 'number' || !Number.isFinite(num)) return false;

    if (num < smallestnumber) {
      smallestnumber = num;
    }
  }

  return smallestnumber;
}

console.log(findSmallest([3, -1, 5, -10, 2])); // -10