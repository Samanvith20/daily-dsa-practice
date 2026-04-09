
/*

Problem: Move Zeroes
Type: Two Pointers
Difficulty: Easy
practice: https://leetcode.com/problems/move-zeroes/

Concepts:
- Two Pointer Technique
- In-place Array Modification
- Stable Ordering (maintain relative order)

--------------------------------------

Approach 1: Using Extra Array (Copying)

Explanation:
We create a new array and first store all non-zero elements.
Then we append all zeros at the end.

This is simple and intuitive but uses extra space.

Pattern: Filtering + Rebuilding Array

Time Complexity: O(n)
Space Complexity: O(n)

--------------------------------------

Approach 2: Optimized (In-place, Two Pointers)

Explanation:
We use a pointer `k` to track where the next non-zero should go.

Step 1:
Move all non-zero elements to the front.

Step 2:
Fill the remaining positions with zeros.

This maintains order and avoids extra space.

⚠️ Important:
We don’t swap blindly — we overwrite and then fill zeros.

Pattern: Two Pointers (Stable Compaction)

Time Complexity: O(n)
Space Complexity: O(1)

--------------------------------------

Solved On: 2026-04-08

Revision Plan:
Day1: 2026-04-09
Day3: 2026-04-11
Day7: 2026-04-15

*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     let result=[];
     for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            result.push(nums[i]);
        }
     }
      while (result.length < nums.length) {
        result.push(0);
    }
     for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }

    return nums;
};

var moveZeroesOptimized = function(nums) {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }
    return nums;
}

console.log("result::",moveZeroesOptimized([0,1,0,3,12]))