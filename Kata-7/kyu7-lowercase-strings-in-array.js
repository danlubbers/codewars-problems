// https://www.codewars.com/kata/lowercase-strings-in-array/train/javascript

// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// Example
// arrayLowerCase(['Red', 'Green']) => ['red', 'green']
// arrayLowerCase([1, 'Green']) => [1, 'green']

// My Answer & Best Practice
function arrayLowerCase(arr) {
    return arr.map(e => typeof e === 'string' ? e.toLowerCase() : e);
};

console.log(arrayLowerCase(['Red', 'Green']), ['red', 'green']);
console.log(arrayLowerCase([1, 'Green']), [1, 'green']);
console.log(arrayLowerCase([ 'OrAngE', { a: 1, z: 26 }, 3, 'gOlD', [Function], 1 ]
));