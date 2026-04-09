/*

Problem: Merge Sorted Array
Type: Two Pointers
Difficulty: Easy
practice: https://leetcode.com/problems/merge-sorted-array/

Concepts:
- Two Pointer Technique
- In-place Modification
- Array Traversal

--------------------------------------

Approach 1: Extra Space (Merge like Merge Sort)

Explanation:
We copy the valid elements of nums1 into a separate array.
Then we use two pointers to compare elements from nums1copy and nums2,
and place the smaller one into nums1.

This avoids overwriting values while merging.

⚠️ Important:
We must handle edge cases when one array is exhausted.
If we don't, we may access undefined values.

Pattern: Two Pointers + Extra Space

Time Complexity: O(m + n)
Space Complexity: O(m)

--------------------------------------

Approach 2: Optimized (In-place, Backward Two Pointers)

Explanation:
We start filling nums1 from the end to avoid overwriting values.

- Pointer i → last valid element in nums1
- Pointer j → last element in nums2
- Pointer k → last position in nums1

We place the larger element at position k and move backward.

⚠️ Important:
We must go from back → front.
If we go forward, we overwrite elements before using them.

Pattern: Two Pointers (Reverse Direction, In-place)

Time Complexity: O(m + n)
Space Complexity: O(1)

--------------------------------------

Solved On: 2026-04-08

Revision Plan:
Day1: 2026-04-09
Day3: 2026-04-11
Day7: 2026-04-15

*/

var merge = function(nums1, m, nums2, n) {
    let nums1copy = nums1.slice(0, m);

    let i = 0; // pointer for nums1copy
    let j = 0; // pointer for nums2

    for (let k = 0; k < m + n; k++) {
        if (i < m && j < n) {
            if (nums1copy[i] < nums2[j]) {
                nums1[k] = nums1copy[i++];
            } else {
                nums1[k] = nums2[j++];
            }
        } else if (i < m) {
            nums1[k] = nums1copy[i++];
        } else {
            nums1[k] = nums2[j++];
        }
    }

    return nums1;
};


var mergeOptimized = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) { // only nums2 matters
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    return nums1;
};


console.log("Brute:", merge([1,2,3,0,0,0],3,[2,5,6],3));
console.log("Optimized:", mergeOptimized([1,2,3,0,0,0],3,[2,5,6],3));