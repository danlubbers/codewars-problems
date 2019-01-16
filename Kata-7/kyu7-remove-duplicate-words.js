// https://www.codewars.com/kata/remove-duplicate-words

// Your task is to remove all duplicate words from string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// My Answer
function removeDuplicateWords (s) {
    let split = s.split(' ')
    return split.filter((e, i) => split.indexOf(e) === i).join(' ');
}

// Best Practice
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');