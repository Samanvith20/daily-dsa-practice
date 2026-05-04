
function removeduplicates(head) {
    if (head === null) return null;
    let current = head;
    while (current !== null && current.next !== null) {
        if(current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}
// Example usage:
let head = { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } } };
let newHead = removeduplicates(head);
// Print the modified list
let current = newHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}