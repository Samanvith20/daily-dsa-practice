
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function removeNthFromEnd(head, n) {
    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    let first = dummyNode;
    let second = dummyNode;
    // Move first pointer n steps ahead
    for (let i = 0; i < n; i++) {
        first = first.next;
    }
    // Move both pointers until first reaches the end
    while (first.next !== null) {
        first = first.next;
        second = second.next;
    }
    // Remove the nth node from the end
    second.next = second.next.next;
    return dummyNode.next;
}

// Example usage for testing:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
let n = 2;
let newHead = removeNthFromEnd(head, n);
// Print the modified list
let current = newHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}