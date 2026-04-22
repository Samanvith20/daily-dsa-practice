/*
Problem: Bubble Sort
Type: Sorting
Difficulty: Easy

Concepts:
- Nested Loops
- Swapping
- Comparison-based sorting

--------------------------------------

Approach: Iterative

Explanation:
Push the largest element to the end in each pass.

Step 1:
Compare adjacent elements

Step 2:
Swap if current > next

Step 3:
Repeat for n-1 passes

Step 4:
Array becomes sorted

Pattern: Brute Force Sorting

Time Complexity: O(n²)
Space Complexity: O(1)

--------------------------------------

Solved On: 2026-04-22

Revision Plan:
Day1: 2026-04-23
Day3: 2026-04-25
Day7: 2026-04-29

--------------------------------------

Code:
*/

function bubblesort(arr){
 let n = arr.length;

 for(let i = 0; i < n - 1; i++){
    for (let j = 0; j < n - 1 - i; j++){
        if(arr[j] > arr[j + 1]){
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
 }

 return arr;
}

console.log(bubblesort([5,3,4,1]));

/*

--------------------------------------

Key Notes:

- Easy but inefficient
- Used for understanding sorting basics
- Can be optimized with a swapped flag

--------------------------------------

*/