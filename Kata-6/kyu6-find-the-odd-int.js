// https://www.codewars.com/kata/find-the-odd-int/

// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// My Answer
function findOdd(arr) {
    let result = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {

            if(arr[i] === arr[j]) {
                result++
            }
        }
        if(result % 2 === 1) {
            return arr[i]
        }
    }   
}

// Best Practice
const findOdd = arr => arr.reduce((a, b) => a ^ b);

// Using find and filter
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(e => e === item).length % 2)
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1));
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5));
console.log(findOdd([10], 10));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1], 10));
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10], 1));