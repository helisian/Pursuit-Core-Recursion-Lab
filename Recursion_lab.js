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
const concatArr = (arr) =>{
    if(arr.length <=1) return arr[0];
    el = arr.shift()
   return el + " " + concatArr(arr)
}
console.log(concatArr(['is', 'it', 'tomorrow']))
//4.
const sumEvens = (arr) =>{
    if(arr.length === 0)
    return
    let el = arr.pop()
    if(el % 2 === 0){
   return el + sumEvens(arr)
    }

}
console.log(sumEvens([2, 3, 5, 6]))