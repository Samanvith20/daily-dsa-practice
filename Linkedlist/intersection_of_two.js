/*
Problem: Intersection of Two Linked Lists
Type: Linked List / Two Pointer / Hashing
Difficulty: Easy

Concepts:
- Pointer Traversal
- Reference Comparison (NOT values)
- Hashing (Set)
- Two Pointer Switching Technique

--------------------------------------

Approach 1: Brute Force (Nested Traversal)

Explanation:
For every node in list A, we check all nodes in list B.

Step 1:
Pick a node from A

Step 2:
Traverse entire B and compare nodes

Step 3:
If match found → return intersection node

Step 4:
If no match → move to next node in A

⚠️ Important:
This compares node values → NOT reliable if values repeat

Time Complexity: O(n * m)
Space Complexity: O(1)

--------------------------------------

Approach 2: Hashing (Better)

Explanation:
Store all nodes of list A in a Set, then check list B.

Step 1:
Traverse A and store each node reference in Set

Step 2:
Traverse B

Step 3:
If any node exists in Set → intersection found

⚠️ Important:
We store node references, NOT values

Time Complexity: O(n + m)
Space Complexity: O(n)

--------------------------------------

Approach 3: Optimal (Two Pointer Switching)

Explanation:
We traverse both lists. When a pointer reaches end,
we redirect it to the other list.

This equalizes path lengths.

Step 1:
Start two pointers: A → headA, B → headB

Step 2:
Move both one step at a time

Step 3:
If pointer reaches null → switch to other list head

Step 4:
Eventually both meet at intersection (or null)

⚠️ Important:
No extra space needed
Works because both traverse equal total distance

Pattern: Two Pointer Equalization

Time Complexity: O(n + m)
Space Complexity: O(1)

Solved On: 2026-05-01
Revision Plan:
Day1:2026-05-02
Day3:2026-05-04
Day7:2026-05-08

--------------------------------------

Code:
*/

// extreme brute force approach
function bruteapproach(headA, headB) {
    let A = headA;
 

    while (A) {

        let temp = B;
        while (temp) {
            if (temp === A) {
                return temp;
            }
            temp = temp.next;
        }

        A = A.next;
    }
    return null;
}

// hashing approach
function hashingapproach(headA, headB) {
    let set = new Set();

    let A = headA;
    while (A) {
        set.add(A);
        A = A.next;
    }

    let B = headB;
    while (B) {
        if (set.has(B)) {
            return B;
        }
        B = B.next;
    }

    return null;
}

// optimal approach
function intersectionOfTwoLinkedLists(headA, headB) {
    let currentA = headA;
    let currentB = headB;

    while (currentA !== currentB) {
        currentA = currentA ? currentA.next : headB;
        currentB = currentB ? currentB.next : headA;
    }

    return currentA;
}

/*

--------------------------------------

*/

// Example usage:
let headA = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
let headB = { val: 6, next: { val: 7, next: { val: 8, next: { val: 4, next: { val: 10, next: null } } } } };
let intersectionNode = intersectionOfTwoLinkedLists(headA, headB);
console.log(intersectionNode); // Output: 4 (intersection node value)