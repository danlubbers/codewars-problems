// https://www.codewars.com/kata/is-it-a-number

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

// First Attempt - Passed 409, Failed 2: Expected true, got false
// function isDigit(s) {
//     console.log(+s)
//     if(!isNaN(+s) && +s !== 0) {
//         return true;
//     } else if(Number.isInteger(+s)) {
//         return false
//     } else {
//         return false
//     }
// }

// Second Attempt - Passed 409, Failed 2: Expected false, got true 
// function isDigit(s) {
//     console.log(Number.isInteger(+s))
//     console.log(!+s == 0)
//     return Number.isInteger(+s) || !isNaN(+s) || !+s == 0 
// }

// Third Attempt - Pased 409, Failed 2: Expected False, got true
function isDigit(s) {
    return +s === (+s | 0) || !isNaN(+s)
}

console.log(isDigit("3"))
console.log(isDigit("  3  "))
console.log(isDigit("-3.23"))

console.log(isDigit("0"))
console.log(isDigit("3-4"))
console.log(isDigit("  3   5"))
console.log(isDigit("3 5"))
console.log(isDigit("zero"))