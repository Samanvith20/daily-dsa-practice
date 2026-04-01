
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=x.toString();
   let reversedStr=str.split("").reverse().join("");
   return reversedStr===str
};

//Inution
// 1. convert the number to string
// 2. reverse the string and compare with original string
console.log("result",isPalindrome(121))

// without converting to string
var isPalindromewithoutstirng = function(x) {
    if(x<0) return false;
     let num=x;
     let reversed =0;
     while (num>0){
        let digit=num%10; // we get last digit
        reversed=reversed*10+digit;  // in order to calclate and store the every digit 
        num=Math.floor(num/10)
     }
     return reversed===x
}
console.log("result",isPalindromewithoutstirng(121))


