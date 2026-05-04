class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeLinkedList(head, target) {
  if (head === null) return null;
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let current = dummyNode;
  while (current.next !== null) {
    if (current.next.val === target) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummyNode.next;
}

// Example usage for testing:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
let target = 3;
let newHead = removeLinkedList(head, target);
// Print the modified list
let current = newHead;  
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
