/*
Problem: Insertion Sort
Type: Sorting
Difficulty: Easy

Concepts:
- Shifting
- Sorted Subarray
- In-place sorting

--------------------------------------

Approach: Iterative

Explanation:
Insert each element into its correct position.

Step 1:
Start from index 1

Step 2:
Compare with previous elements

Step 3:
Shift elements to right

Step 4:
Insert at correct position

Pattern: Incremental Sorting

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

function insertionSort(arr){
    let n = arr.length;

    for(let i = 1; i < n; i++){
        let current = arr[i];
        let prev = i - 1;

        while(prev >= 0 && arr[prev] > current){
            arr[prev + 1] = arr[prev];
            prev--;
        }

        arr[prev + 1] = current;
    }

    return arr;
}

console.log(insertionSort([5,6,1,2,6]));

/*

--------------------------------------

Key Notes:

- Efficient for small datasets
- Best case O(n) (already sorted)
- Used in hybrid sorting algorithms

--------------------------------------

*/