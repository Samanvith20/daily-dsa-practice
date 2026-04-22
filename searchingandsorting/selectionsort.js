/*
Problem: Selection Sort
Type: Sorting
Difficulty: Easy

Concepts:
- Minimum selection
- Swapping
- In-place sorting

--------------------------------------

Approach: Iterative

Explanation:
Select smallest element and place it correctly.

Step 1:
Find minimum in unsorted part

Step 2:
Swap with current index

Step 3:
Repeat for entire array

Pattern: Selection-Based Sorting

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

function selectionsort(arr){
    let n = arr.length;

    for(let i = 0; i < n - 1; i++){
        let min = i; // FIXED

        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        if(min !== i){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr; // FIXED position
}

console.log(selectionsort([4,3,1,9,2]));

/*

--------------------------------------

Key Notes:

- Always O(n²)
- Less swaps than bubble sort
- Not stable

--------------------------------------

*/