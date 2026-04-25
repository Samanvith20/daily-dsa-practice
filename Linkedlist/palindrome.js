

// two Approaches to check if a number is a palindrome or not

function checkPalindrome(head) {
    let result=[]
    let start = head;
    while(start !== null){
        result.push(start.val);
        start = start.next;
    }
    let left = 0;
    let right = result.length - 1;
    while(right>left){
        if(result[left] !== result[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function checkPalindrome2(head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    while(slow !== null){
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    let left = head;
    let right = prev;
    while(right !== null){
        if(left.val !== right.val){
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
}

//test case
let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 5, next: { val: 1, next: null } } } } };
console.log(checkPalindrome(head));