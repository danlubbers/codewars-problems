// https://www.codewars.com/kata/isreallynan/train/javascript

// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

// Any solution is acceptable!

// My Answer
const isReallyNaN = (val) => {
    return Number.isNaN(val);
};

// Best Practice
// const isReallyNaN = Number.isNan;

// Most Clever
// const isReallyNaN = val => val !== val;

console.log(isReallyNaN(37), false)
console.log(isReallyNaN('37'), false)
console.log(isReallyNaN(NaN), true)
console.log(isReallyNaN(undefined), false)