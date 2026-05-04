

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function mergetwosortedlists(l1,l2){
    let dummyNode=new ListNode()
    let ansHead=dummyNode
    while (l1 && l2){
        if(l1.val<l2.val){
            dummyNode.next=l1
            l1=l1.next
        }else{
          dummyNode.next=l2
            l2=l2.next  
        }
        dummyNode=dummyNode.next
    }
    if(!l1){
        dummyNode.next=l2
    }else{
 dummyNode.next=l1
    }
    return ansHead.next

}

// Example usage:

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
let mergedHead = mergetwosortedlists(l1, l2);
// Print the merged list
let current = mergedHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
