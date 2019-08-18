// https://www.codewars.com/kata/filter-the-number/train/javascript

// Filter the number
// Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// My Answer
function FilterString(value) {
    return +value.split('').filter(e => /\d/.test(e)).join('');
}

// Best Practice
var FilterString = function(value) {
    return parseInt(value.replace(/[^\d]/g, ''));
}

// Using For Loop
function FilterString(value) {
    let result = '';
    for(let i = 0; i < value.length; i++) {
        if(!isNaN(value[i])) {
            result += value[i];
        }
    }
    return parseInt(result);
}

console.log(FilterString("123"), 123, 'Just return the numbers');
console.log(FilterString("a1b2c3"), 123, 'Just return the numbers');
console.log(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
