

var secondHighest = function(s) {
    let firstHighest=-1;
    let secondHighest=-1;
   let arr=s.split("").filter((item)=>item >='0' && item <='9').map(Number)
    for(let i=0;i<arr.length;i++) {
        if (arr[i]>firstHighest) {
            secondHighest=firstHighest;
            firstHighest=arr[i];

        }else if(arr[i]>secondHighest && arr[i] ==firstHighest) {
            secondHighest=arr[i]
        }


    }
    return secondHighest
};
console.log("result",secondHighest("122"))
