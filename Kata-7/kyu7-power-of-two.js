// https://www.codewars.com/kata/power-of-two

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// https://en.wikipedia.org/wiki/Power_of_two

// My Answer
function isPowerOfTwo(n){
   return typeof n === 'number' ? n && (n & (n -1)) === 0 : 'Not a number';
}

// Best Practice
function isPowerOfTwo(n) {
    return !(n & (n - 1));
}

// Using Callback
function isPowerOfTwo(n){
    if (n < 2) return false;
    if (n == 2) return true;
    return isPowerOfTwo(n / 2);
}

// Another way
function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwo(2), true)
console.log(isPowerOfTwo(4096), true)
console.log(isPowerOfTwo(5), false)
// console.log(isPowerOfTwo('as'), false)