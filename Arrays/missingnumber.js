/*

Problem: Missing Number
Type: Array / Math
Difficulty: Easy
practice: https://leetcode.com/problems/missing-number/

Concepts:
- Sorting
- Hashing (Array Mapping)
- Mathematical Formula (Sum)
- XOR (optional advanced)

--------------------------------------

Approach 1: Sorting (O(n log n))

Explanation:
We first sort the array and then check where the sequence breaks.

Step 1:
Sort the array

Step 2:
Check difference between consecutive elements

Step 3:
If difference != 1 → missing number found

⚠️ Edge Case:
- If first element ≠ 0 → return 0
- If no break → missing = n

Pattern: Sorting + Linear Scan

Time Complexity: O(n log n)
Space Complexity: O(1)

--------------------------------------

Approach 2: Hashing (Extra Array)

Explanation:
We create a new array of size (n+1) and mark presence.

Step 1:
Initialize array with default value (0 or -1)

Step 2:
Mark indices for each number

Step 3:
Index not marked = missing number

Pattern: Index Mapping / Direct Addressing

Time Complexity: O(n)
Space Complexity: O(n)

--------------------------------------

Approach 3: Optimal (Sum Formula)

Explanation:
We use formula for sum of first n numbers.

Expected sum = n * (n + 1) / 2  
Actual sum = sum of array  

Missing = expected - actual

Pattern: Math Optimization

Time Complexity: O(n)
Space Complexity: O(1)

--------------------------------------

Solved On: 2026-04-09

Revision Plan:
Day1: 2026-04-10
Day3: 2026-04-12
Day7: 2026-04-16

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Approach 1: Sorting
var missingNumberSorting = function(nums) {
    let n = nums.length;

    nums.sort((a, b) => a - b);

    // If 0 is missing
    if (nums[0] !== 0) return 0;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i + 1] - nums[i] !== 1) {
            return nums[i] + 1;
        }
    }

    return n;
};


// Approach 2: Hashing (Extra Array)
var missingNumberHashing = function(nums) {
    let n = nums.length;
    let v = new Array(n + 1).fill(0);

    for (let num of nums) {
        v[num] = 1;
    }

    for (let i = 0; i <= n; i++) {
        if (v[i] === 0) return i;
    }
};


// Approach 3: Optimal (Sum)
var missingNumber = function(nums) {
    let n = nums.length;

    let expected = n * (n + 1) / 2;
    let actual = 0;

    for (let num of nums) {
        actual += num;
    }

    return expected - actual;
};

console.log("Sorting:", missingNumberSorting([3,0,1]));
console.log("Hashing:", missingNumberHashing([3,0,1]));
console.log("Optimal:", missingNumber([3,0,1]));