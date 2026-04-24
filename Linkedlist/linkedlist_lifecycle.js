

//Apporch one using set

function lifecycle(head){
    if(head === null) return false;
    let set = new Set();
    let current = head;
    while(current !== null){
        if(set.has(current)){
            return true;
        }
        set.add(current);
        current = current.next;
    }
    return false;
}


function lifecycle(head){
    if(head === null) return false;
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }
    return false;
}
    
//test case
let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
console.log(lifecycle(head)); // Output: false