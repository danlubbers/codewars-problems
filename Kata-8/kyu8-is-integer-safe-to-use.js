// https://www.codewars.com/kata/is-integer-safe-to-use

// Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

// SafeInteger(9007199254740990) //true
// SafeInteger(-90) //true
// SafeInteger(9007199254740992) //false

// My Answer
function SafeInteger(n) {
    if (typeof n === 'number' && Math.round(n) === n & n <= Number.MAX_SAFE_INTEGER) {
        return true
    } else {
        return false
    }
}

// My Answer using Ternary
function SafeInteger(n) {
     return typeof n === 'number' && Math.round(n) === n & n <= Number.MAX_SAFE_INTEGER ? true : false;
}

// Best Practice using ES6
function SafeInteger(n) {
    return Number.isSafeInteger(n);
  }

console.log(SafeInteger(9007199254740990)) //true
console.log(SafeInteger(-90)) //true
console.log(SafeInteger(9007199254740992)) //false