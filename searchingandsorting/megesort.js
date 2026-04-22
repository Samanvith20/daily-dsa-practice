/*
Problem: Merge Sort
Type: Sorting (Divide & Conquer)
Difficulty: Medium

Concepts:
- Recursion
- Divide & Conquer
- Merging

--------------------------------------

Approach: Recursive

Explanation:
Divide array and merge sorted halves.

Step 1:
Divide array into two halves

Step 2:
Recursively sort left and right

Step 3:
Merge sorted arrays

Step 4:
Return final sorted array

Pattern: Divide & Conquer

Time Complexity: O(n log n)
Space Complexity: O(n)

--------------------------------------

Solved On: 2026-04-22

Revision Plan:
Day1: 2026-04-23
Day3: 2026-04-25
Day7: 2026-04-29

--------------------------------------

Code:
*/

function merge(left, right){
    let result = [];
    let i = 0, j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([5,3,4,1]));

/*

--------------------------------------

Key Notes:

- Stable sorting algorithm
- Much faster than bubble/selection
- Requires extra space

--------------------------------------

*/