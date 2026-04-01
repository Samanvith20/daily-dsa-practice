
function sum(...args) {
    let sum=0;
    //rest operator it collects all arguments passed to the function into single array
    for (let num of args){
      sum+=num
    }
    return sum
}

console.log("result",sum(4,5,6))