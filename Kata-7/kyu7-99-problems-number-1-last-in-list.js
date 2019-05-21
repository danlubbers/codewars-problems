// https://www.codewars.com/kata/99-problems-number-1-last-in-list/train/javascript

// Write a function last that accepts a list and returns the last element in the list.

// My Answer
const last = arr => arr.length <= 0 ? null : arr.pop();

console.log( last([1,2,3]), 3, "last([1,2,3]) == 3");
console.log( last([]), null, "last( [] ) == null");
