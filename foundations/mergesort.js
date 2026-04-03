/*
Problem: Sort an Array (Merge Sort)
Link: https://leetcode.com/problems/sort-an-array/
Difficulty: Medium

Concepts:
- Recursion
- Divide and Conquer
- Two Pointer Merge

Approach:
- Divide array into halves until size = 1
- Recursively sort left and right halves
- Merge two sorted arrays:
  → Compare elements using two pointers
  → Push smaller element into result
  → Add remaining elements after one side finishes

Pattern: Divide & Conquer + Two Pointers

Time Complexity: O(n log n)
Space Complexity: O(n)

Solved On: 2026-04-03

Revision Plan:
Day1: 2026-04-04
Day3: 2026-04-06
Day7: 2026-04-10
*/

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // remaining elements
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

var sortArray = function(nums) {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));

  return merge(left, right);
};

console.log(sortArray([5, 2, 3, 1])); // [1,2,3,5]