/*

Problem: Single Number
Type: Hashing / Sorting / Bit Manipulation
Difficulty: Easy
practice: https://leetcode.com/problems/single-number/

Concepts:
- Hashmap (Frequency Count)
- Sorting + Pair Comparison
- Bit Manipulation (XOR)

Explanation:

Approach 1 (Hashmap):
Store frequency of each number using an object.
Then find the number whose count is 1.

Approach 2 (Sorting):
Sort the array so duplicates come together.
Check elements in pairs → if nums[i] !== nums[i+1], it's the answer.

Approach 3 (XOR - Optimal):
Use XOR to cancel duplicates.
Same numbers cancel out → only single number remains.

Alternative:
- Use Set (add/remove trick)
- Use for...in on hashmap (remember keys are strings → convert to Number)

⚠️ Important:
- In hashmap (for...in), keys are strings → use Number(key)
- Sorting approach only works because duplicates are adjacent
- XOR works only when every element appears exactly twice except one

Pattern:
- Frequency Count
- Pair Comparison
- Bit Manipulation (XOR cancellation)

Time Complexity:
- Hashmap → O(n)
- Sorting → O(n log n)
- XOR → O(n)

Space Complexity:
- Hashmap → O(n)
- Sorting → O(1)
- XOR → O(1)

Solved On: 2026-04-10

Revision Plan:
Day1: 2026-04-11
Day3: 2026-04-13
Day7: 2026-04-17

*/

var singleNumberHashmap = function(nums) {
    let hashmap = {};

    for (let num of nums) {
        hashmap[num] = (hashmap[num] || 0) + 1;
    }

    for (let num of nums) {
        if (hashmap[num] === 1) {
            return num;
        }
    }
};

var singleNumberSorting = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};

var singleNumberXOR = function(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
};

console.log("Hashmap:", singleNumberHashmap([2,2,3,4,4]));
console.log("Sorting:", singleNumberSorting([2,2,3,4,4]));
console.log("XOR:", singleNumberXOR([2,2,3,4,4]));