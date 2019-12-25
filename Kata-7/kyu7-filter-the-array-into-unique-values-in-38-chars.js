// https://www.codewars.com/kata/filter-the-array-into-unique-values-in-38-chars/train/javascript

// Filter the array into unique values. You have 38 characters to do it in!

// Input => [1, 1, 2, 3]
// Output => [1, 2, 3]
// Note:

// It can be achieved in 29 characters if you want to make some truly horrendous code.

// If you use let or const or other ES6 features, your code will get longer due to the transformation by babel.

// Too Long
const makeUnique = arr => [...new Set(arr)];

// My Aswer shortened
let makeUnique=arr=>[...new Set(arr)]

// Best Practice
makeUnique=a=>[...new Set(a)]

// Most clever
makeUnique=require('lodash').uniq

console.log(makeUnique([]), []);
console.log(makeUnique([1, 2, 3, 3]), [1, 2, 3]);
console.log(makeUnique(['A', 'A', 0]), ['A', 0]);