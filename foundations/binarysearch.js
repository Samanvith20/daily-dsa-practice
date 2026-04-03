/*
Problem: Binary Search
Link: https://leetcode.com/problems/binary-search/
Difficulty: Easy

Concepts:
- Sorted Array
- Two Pointers (left, right)
- Divide and Conquer

Approach:
- Initialize left = 0, right = n-1
- Find mid
- Compare target with nums[mid]
  → if equal → return index
  → if smaller → search left half
  → if greater → search right half
- Repeat until found or pointers cross

Pattern: Binary Search / Divide & Conquer

Time Complexity: O(log n)
Space Complexity: O(1)

Solved On: 2026-04-03

Revision Plan:
Day1: 2026-04-04
Day3: 2026-04-06
Day7: 2026-04-10
*/

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

console.log("result:", search([-1, 0, 3, 5, 9, 12], 9)); // 4