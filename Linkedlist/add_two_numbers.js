class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function add_two_numbers(l1, l2){
    let dummy = new ListNode(0);
    let anshead=dummy
    let carry=0
    while(l1||l2||carry){
        let sum=carry+(l1?l1.val:0)+(l2?l2.val:0)
         carry=Math.floor(sum/10);
        let digit=sum%10
        let newNode=new ListNode(digit)
        dummy.next=newNode
        dummy=dummy.next
        l1=l1&&l1.next
        l2=l2&&l2.next
    }
    return anshead.next
}

// example usage
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
let result = add_two_numbers(l1, l2);
// Print the result
let current = result;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}