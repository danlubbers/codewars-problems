// https://www.codewars.com/kata/powers-of-3/train/javascript

// Given a positive integer N, return the largest integer k such that 3^k < N.

// For example,

// largestPower(3) = 0
// largestPower(4) = 1
// You may assume that the input to your function is always a positive integer.

// My Answer
function largestPower(n){
    let count = 0;

    while(3 ** count < n) {
        count++
    }
    return count - 1;
}

// Best Practice
function largestPower(n) {
    return Math.ceil(Math.log10(n) / Math.log10(3)) - 1;
}

console.log(largestPower(3), 0)
console.log(largestPower(5), 1)
console.log(largestPower(7), 1)
console.log(largestPower(81), 3)
console.log(largestPower(82), 4)