// https://www.codewars.com/kata/last-digit-of-an-array/train/javascript

// Write a function that returns the last digit of rightmost integer in the given array. Be careful - there might be numbers that aren't integers in the arrays!

// [1,2,3] --> 3
// ["a", 45, "b", 67, "c"] --> 7
// [-17, -4, -12] --> 2
// ["g", 12, "h", 4.5, "i"] --> 2
// ["a", "b", "c"] --> "No integers found."

// My Answer
function lastDigit(arr) {
    let mapped = arr.filter(e => Number.isInteger(e)).toString()
    let lastDigit = String(mapped).substr(-1)
    return mapped.length < 1 ? 'No integers found.' : +lastDigit;
}

// Best Practice
function lastDigit(arr) {
    for(let l = arr.length, i = l - 1; i >= 0; i--) {
        const e = arr[i];
        if(Number.isInteger(e)) return +e.toString().slice(-1);
    }
    return 'No integers found.'
}

console.log(lastDigit([1,2,3]), 3)
console.log(lastDigit(["a", 45, "b", 67, "c"]), 7)
console.log(lastDigit([-17, -4, -12]), 2)
console.log(lastDigit(["a","b","c"]), "No integers found.")