/*
Problem: Design Linked List
Type: Linked List (Implementation)
Difficulty: Medium

Concepts:
- Singly Linked List
- Pointer manipulation
- Index-based operations
- Dynamic size tracking

--------------------------------------

Approach: Iterative

Explanation:
We simulate a linked list using nodes and handle operations manually.

--------------------------------------

Code (Runnable in VS Code):
*/

function node(val){
    this.val = val;
    this.next = null;
}

class MyLinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    get(index){
        if(index < 0 || index >= this.size) return -1;

        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        return current.val;
    }

    addAtHead(val){
        let newnode = new node(val);
        newnode.next = this.head;
        this.head = newnode;
        this.size++;
    }

    addAtTail(val){
        let newnode = new node(val);

        if(this.head === null){
            this.head = newnode;
            this.size++;
            return;
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }

        current.next = newnode;
        this.size++; // FIXED
    }

    addAtIndex(index, val){
        if(index > this.size) return;

        if(index <= 0){
            this.addAtHead(val);
            return;
        }

        if(index === this.size){
            this.addAtTail(val);
            return;
        }

        let newnode = new node(val);
        let current = this.head;

        for(let i = 0; i < index - 1; i++){
            current = current.next;
        }

        newnode.next = current.next;
        current.next = newnode;
        this.size++;
    }

    deleteAtIndex(index){
        if(index < 0 || index >= this.size) return;

        if(index === 0){
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;

        for(let i = 0; i < index - 1; i++){
            current = current.next;
        }

        current.next = current.next.next;
        this.size--;
    }

    // Helper function to print list
    print(){
        let current = this.head;
        let result = [];
        while(current){
            result.push(current.val);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

/*
--------------------------------------
Test Cases (Same as LeetCode Example)
--------------------------------------
*/

let obj = new MyLinkedList();

console.log("Initial:", obj.print());

obj.addAtHead(1);        // [1]
obj.print();

obj.addAtTail(3);        // [1,3]
obj.print();

obj.addAtIndex(1, 2);    // [1,2,3]
obj.print();

console.log("Get index 1:", obj.get(1)); // 2

obj.deleteAtIndex(1);    // [1,3]
obj.print();

console.log("Get index 1:", obj.get(1)); // 3


/*
--------------------------------------

Expected Output:

(empty)
1
1 -> 3
1 -> 2 -> 3
Get index 1: 2
1 -> 3
Get index 1: 3

--------------------------------------

Key Notes:

- size must always be correct
- index == size is valid
- addAtTail bug was critical (size--)
- Always test with print()

--------------------------------------
*/