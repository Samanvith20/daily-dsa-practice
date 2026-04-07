/*

Problem: Reverse String (In-place)
Type: Two Pointers
Difficulty: Easy
practice: https://leetcode.com/problems/reverse-string/

Concepts:
- Two Pointer Technique
- In-place Swapping
- Array Manipulation

Explanation:
We use two pointers (left and right).
Swap elements at both ends and move inward until they meet.
This avoids extra space and prevents overwriting.

Alternative:
Loop from 0 to n/2 and swap with (n-1-i).

⚠️ Important:
We cannot loop from end to start and overwrite directly,
because it may overwrite values before they are used.

Pattern: Two Pointers, In-place Swap

Time Complexity: O(n)
Space Complexity: O(1)

Solved On: 2026-04-07

Revision Plan:
Day1: 2026-04-08
Day3: 2026-04-10
Day7: 2026-04-14

*/

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }

    return s;
};

var reverseStringAlternative = function(s) {
    let n = s.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        [s[i], s[n - 1 - i]] = [s[n - 1 - i], s[i]];
    }

    return s;
};

console.log("result:", reverseString(["h","e","l","l","o"]));
console.log("result:", reverseStringAlternative(["h","e","l","l","o"]));