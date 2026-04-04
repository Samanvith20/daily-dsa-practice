/*
Problem: Second Largest Digit in a String
Link: https://leetcode.com/problems/second-largest-digit-in-a-string/
Difficulty: Easy

Concepts:
- String → Array
- Filtering digits
- One-pass max tracking

Approach:
- Extract digits
- Track first & second max in single loop
Pattern: One-pass max tracking

Time Complexity: O(n)
Space Complexity: O(n)

Solved On: 2026-04-01

Revision Plan:
Day1: 2026-04-02
Day3: 2026-04-04
Day7: 2026-04-08

*/

var secondHighest = function(s) {
    let firstHighest = -1;
    let secondHighest = -1;

    let arr = s
        .split("")
        .filter(ch => ch >= '0' && ch <= '9')
        .map(Number);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstHighest) {
            secondHighest = firstHighest;
            firstHighest = arr[i];
        } 
        else if (arr[i] > secondHighest && arr[i] !== firstHighest) {
            secondHighest = arr[i];
        }
    }

    return secondHighest;
};

console.log("result:", secondHighest("122")); // 1