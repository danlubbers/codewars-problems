// https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript

// Given a number n, return the number of positive odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]

// Passes all test 
const oddCount = n => Math.floor(n / 2);

// My Answer using Array works, but times out
function oddCount(num) {
    let count = [];
    for(let i = 1; i <= num; i++) {
        if(i % 2 === 0) {
            count.push(i)
        }
    }
    return count.length
} 

// Using count increment works but times out
function oddCount(num) {
    let count = 0;
    for(let i = 1; i <= num; i++) {
        if(i % 2 === 0) {
            count++
        }
    }
    return count
} 

console.log(oddCount(15), 7, "Oops! Wrong.");
console.log(oddCount(15023), 7511, "Oops! Wrong.");
