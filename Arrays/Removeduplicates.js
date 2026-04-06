/*
Problem: Remove Duplicates from Sorted Array
Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Difficulty: Easy

Approach 1: Using Set (Easy but not optimal)
- Use Set to remove duplicates
- Convert back to array
- Copy into original array (if needed)
👉 Pattern: Hashing / Unique elements

Approach 2: Two Pointers (Optimal)
- Use pointer `k` to track position of unique elements
- Compare current with previous element
- Place unique values in front
👉 Pattern: Two pointers / In-place array modification

Time Complexity: O(n)
Space Complexity:
- Set → O(n)
- Two Pointer → O(1) ✅

Solved On: 2026-04-06

Revision Plan:
Day1: 2026-04-07
Day3: 2026-04-09
Day7: 2026-04-13
*/

var removeDuplicatesSet = function(nums) {
    let unique = [...new Set(nums)];

    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i];
    }

    nums.length = unique.length;

    return nums;
};

console.log("Set Approach:", removeDuplicatesSet([0,0,1,1,1,2,2,3,3,4]));

var removeDuplicatesOptimal = function(nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

console.log("Two Pointer Approach:", removeDuplicatesOptimal([0,0,1,1,1,2,2,3,3,4]));