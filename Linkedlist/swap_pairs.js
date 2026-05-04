class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
var swapPairs = function (head) {
  if (head == null || head.next == null) return head;
  let dummynode = new ListNode();
  dummynode.next = head;
  let prev = dummynode;
  let current = head;
  let next = head.next;
  while (current && next) {
    prev.next = next;
    current.next = next.next;
    next.next = current;
    prev = current;
    current = prev && prev.next;
    next = current && current.next;
  }
  return dummynode.next;
};
// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
let newHead = swapPairs(head);
// Print the modified list
let current = newHead;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
