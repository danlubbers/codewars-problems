// https://www.codewars.com/kata/what-is-type-of-variable/train/javascript

// Create a function to return true type of variable, i.e.

// type([]) => 'array'
// type({}) => 'object'
// type('') => 'string'
// type(NaN) => 'number'

// My Answer
function type(value) {
    if(value === null) return 'null';
    if(typeof value === 'string') return 'string';
    if(typeof value === 'number') return 'number';
    if(typeof value === 'undefined') return 'undefined';
    if(value instanceof Date) return 'date';
    if(typeof value === 'object') return Array.isArray(value) ? 'array' : 'object';  
}

// Best Practice
function type(value) {
    return {}.toString.call(value).slice(8, -1).toLowerCase();
}


console.log(type([]), 'array');
console.log(type({}), 'object');
console.log(type(''), 'string');
console.log(type([].join()), 'string');
console.log(type(new Date()), 'date');

console.log(type(null), 'null');
console.log(type(undefined), 'undefined');
console.log(type(NaN), 'number');
console.log(type(5), 'number');