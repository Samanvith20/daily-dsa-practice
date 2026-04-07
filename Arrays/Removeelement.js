/*

Problem: Remove Element
Type: Two Pointers / Array Filtering
Difficulty: Easy
practice: https://leetcode.com/problems/remove-element/

Concepts:
- Two Pointer Technique
- In-place Array Modification
- Overwriting valid elements

Explanation:
We use a pointer (k) to track the position of valid elements.
Iterate through array:
- If element != val → place it at index k
- Increment k

Final array first k elements are valid.

Pattern: Two Pointers, Filtering

Time Complexity: O(n)
Space Complexity: O(1)

Solved On: 2026-04-07

Revision Plan:
Day1: 2026-04-08
Day3: 2026-04-10
Day7: 2026-04-14

*/

var removeElement = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

console.log("result:", removeElement([0,1,2,2,3,0,4,2], 2));