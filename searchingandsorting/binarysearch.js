/*
Problem: Binary Search
Type: Searching (Divide & Conquer)
Difficulty: Easy

Concepts:
- Binary Search
- Two Pointers
- Divide and Conquer

--------------------------------------

Approach: Iterative (Optimal)

Explanation:
We reduce the search space by half each time.

Step 1:
Initialize:
left = 0
right = n - 1

Step 2:
Find middle:
mid = (left + right) / 2

Step 3:
Compare:
- If arr[mid] === target → return index
- If target > arr[mid] → search right half
- Else → search left half

Step 4:
Repeat until left <= right

Pattern: Divide & Conquer

Time Complexity: O(log n)
Space Complexity: O(1)

--------------------------------------

Solved On: 2026-04-22

Revision Plan:
Day1: 2026-04-23
Day3: 2026-04-25
Day7: 2026-04-29

--------------------------------------

Code:
*/

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) { // FIXED condition
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([3, 6, 9, 12, 20], 12));

/*

--------------------------------------

Key Notes:

- Works only on sorted arrays
- Always use (left <= right)
- One of the most asked interview questions

--------------------------------------

*/