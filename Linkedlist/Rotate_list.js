function RotateList(head, k) {
    if (!head || !head.next) return head;

    let length = 0;
    let current = head;

    while (current) {
        current = current.next;
        length++;
    }

    let newk = k % length;

    // ✅ FIX
    if (newk === 0) return head;

    let slow = head;
    let fast = head;

    for (let i = 0; i < newk; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    let newHead = slow.next;
    fast.next = head;
    slow.next = null;

    return newHead;
};

// Example usage:
let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
let k = 2;
let newHead = RotateList(head, k);
// Print the modified list
let current = newHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}