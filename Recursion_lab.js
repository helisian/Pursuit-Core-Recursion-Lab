//1.
const sum = (num) =>{
    if(num <= 0) return 0;
    return num + sum(num-1)
}
console.log(sum(5))
//2.
const multArr = (arr) =>{
    
    if(arr.length <= 1) return arr[0];
    el = arr.pop()
    return el * multArr(arr)
}
console.log(multArr([2,3,5]))
//3.
const 