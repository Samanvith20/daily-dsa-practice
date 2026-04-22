

function fibonacciIterativeapproach(n){
    if(n<=1) return n;
    let prev1=1 // fib(1)
    let prev2=0 //fib(0)
    
    for(let i=2;i<=n;i++){
       
        let current=prev1+prev2;
        prev2=prev1;
        prev1=current;
    }
    return prev1
}


function fibonaccirecusiveapproach(n){
    if(n<=1) return n;
    return fibonaccirecusiveapproach(n-1)+fibonaccirecusiveapproach(n-2)
}

console.log("result of iterative approach",fibonacciIterativeapproach(5))
console.log("result of recursive approach",fibonaccirecusiveapproach(5))