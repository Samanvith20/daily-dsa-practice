/*
Problem: Palindrome Number
Link: https://leetcode.com/problems/palindrome-number/description/
Difficulty: Easy

Approach 1: String Conversion
- Convert number → string
- Reverse → compare
👉 Pattern:  Reverse comparison

Approach 2: Math (Optimal)
- Extract digits using % 10
- Build reversed number
👉 Pattern: Digit extraction + Number reversal

Time Complexity: O(log n)
Space Complexity: O(1)

Solved On: 2026-04-01

Revision Plan:
Day1: 2026-04-02
Day3: 2026-04-04
Day7: 2026-04-08

*/

var isPalindrome = function(x) {
    let str = x.toString();
    let reversedStr = str.split("").reverse().join("");

    return reversedStr === str;
};

console.log("String Approach:", isPalindrome(121));


// ✅ Without converting to string (Better for interviews)
var isPalindromeWithoutString = function(x) {
    if (x < 0) return false;

    let num = x;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reversed === x;
};

console.log("Math Approach:", isPalindromeWithoutString(121));