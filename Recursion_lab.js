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
const sumEvens = arr => {
    if(arr.length === 0) return 0
    let pop = arr.pop()
    let even = 0
    if (pop % 2 === 0) {
        even = pop
    }
    return even + sumEvens(arr)    
}
console.log(sumEvens([2, 3, 5, 6]))

//Problem 5
const range = (num1, num2) => {
    let arr = [];
    if(num1 > num2){
        return arr;
    }
    arr.push(num1);
    return  arr.concat(range(num1 + 1, num2));
    }
console.log(range(1,5))

