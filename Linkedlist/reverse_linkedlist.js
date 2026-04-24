

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let nextTemp = current.next; // Store the next node
        current.next = prev; // Reverse the current node's pointer
        prev = current; // Move prev to the current node
        current = nextTemp; // Move to the next node
    }
    return prev; // At the end, prev will be the new head of the reversed list
}

// Example usage:
let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
let reversedHead = reverseLinkedList(head);
// Print reversed list
let current = reversedHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
