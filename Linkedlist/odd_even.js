
function oddEvenList(head) {
    if (head === null) return null;
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while (odd.next !== null && even.next !== null) {
       odd.next=odd.next.next;
       even.next=even.next.next;
       odd=odd.next;
       even=even.next;
    }
    odd.next = evenHead;
    return head;
}
// Example usage:
let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
let newHead = oddEvenList(head);
// Print the modified list
let current = newHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}