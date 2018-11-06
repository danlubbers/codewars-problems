// https://www.codewars.com/kata/opposite-number

// Very simple, given a number, find its opposite.

Examples:

// 1: -1
// 14: -14
// -34: 34

// My Answer
function opposite(num) {
    if(Math.sign(num)) {
        return -num
    } else {
        return num
    }
}

// Refactor Ternary
function opposite(num) {
    return Math.sign(num) ? -num : num;
}

// ES6
opposite = num => Math.sign(num) ? -num : num;

// Best Practice
function opposite(number) {
    return(-number);
}


console.log(opposite(1), -1,)
console.log(opposite(-14), 14,)