// https://www.codewars.com/kata/enumerable-magic-number-25-take-the-first-n-elements

// Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// My Answer
function take(arr, n) {
    return arr.slice(0, n);
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");

