/*

Problem: Sum of Arguments
Type: Basics / JavaScript Fundamentals
Difficulty: Easy
practice: https://namastedev.com/practice/sum
Concepts:
- Rest Operator (...args)
- Iteration (for...of)

Explanation:
Rest operator collects all arguments into an array.
We iterate and sum them.

 Pattern: Iteration, Aggregation

Time Complexity: O(n)
Space Complexity: O(1)

Solved On: 2026-04-01

Revision Plan:
Day1: 2026-04-02
Day3: 2026-04-04
Day7: 2026-04-08

*/

function sum(...args) {
    let total = 0;

    for (let num of args) {
        total += num;
    }

    return total;
}

console.log("result:", sum(4, 5, 6));