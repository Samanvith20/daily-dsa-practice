/* 
Problem: Power of Two
Link: https://leetcode.com/problems/power-of-two/
Difficulty: Easy

Concepts:
- Bit Manipulation
- Recursion
- Mathematical properties (log2)

Approach 1 (Optimal - Bit Manipulation):
- A power of 2 has only one set bit in binary
- n & (n - 1) removes the last set bit
- If result is 0 → only one set bit → power of 2
Pattern: Bit manipulation

Time Complexity: O(1)
Space Complexity: O(1)

--------------------------------------------------

Approach 2 (Recursion):
- Keep dividing n by 2
- If n === 1 → true
- If n becomes odd or <= 0 → false
Pattern: Divide & reduce

Time Complexity: O(log n)
Space Complexity: O(log n)

--------------------------------------------------

Approach 3 (Brute Force - Loop):
- Check all powers of 2 using Math.pow
- Compare with n
Pattern: Iterative checking

Time Complexity: O(n)
Space Complexity: O(1)

--------------------------------------------------

Solved On: 2026-04-04

Revision Plan:
Day1: 2026-04-05
Day3: 2026-04-07
Day7: 2026-04-11

*/

var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};

var isPowerOfTwoRecursive = function(n) {
    if (n === 1) return true;
    if (n <= 0 || n % 2 !== 0) return false;

    return isPowerOfTwoRecursive(n / 2);
};
var isPowerOfTwoBrute = function(n) {
    if (n <= 0) return false;

    for (let i = 0; i < n; i++) {
        if (Math.pow(2, i) === n) return true;
    }
    return false;
};