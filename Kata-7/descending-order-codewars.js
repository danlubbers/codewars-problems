// https://www.codewars.com/kata/descending-order

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221

// My Answer
function descendingOrder(num){
    // Array.from is swallow copy of array then toString changes numbers to string and map converts them back to numbers
    let descending = Array.from(num.toString()).map(Number)
    return +descending.sort((a, b) => b - a).join('')
}
  
// Best Practice
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}
  
console.log((descendingOrder(0))) // 0
console.log((descendingOrder(1))) // 1
console.log((descendingOrder(123456789))) //, 987654321