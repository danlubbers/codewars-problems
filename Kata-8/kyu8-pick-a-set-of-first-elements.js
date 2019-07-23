// https://www.codewars.com/kata/pick-a-set-of-first-elements/train/javascript

// Write a JavaScript function to get the first element of an array. Passing a parameter n (default=1) will return the first n elements of the array. If n == 0 return an empty array ([]);

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) => ['a'];
// first(arr, 2) => ['a', 'b']
// first(arr, 3) => ['a', 'b', 'c'];
// first(arr, 0) => [];
// Note:
// Don't modify array argument.

// My Answer
function first(arr, n = 1) {
    if (n === 0) return []
    return arr.slice(0, n)
}

// My Answer refactored with ternary
function first(arr, n = 1) {
    return n === 0 ? [] : arr.slice(0, n);
}

// Best Practice 
function first(arr, n = 1) {
    return arr.slice(0, n);
}


var arr = ['a', 'b', 'c', 'd', 'e'];
console.log(first(arr), ['a']);
console.log(first(arr, 2), ['a', 'b']);