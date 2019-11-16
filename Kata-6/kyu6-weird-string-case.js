// https://www.codewars.com/kata/weird-string-case/train/javascript

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// My Answer & Best Practice!!!
function toWeirdCase(str) {
  return str.split(' ').map(word => {
      return word.split('').map((e, i) => {
        return i % 2 === 0 ? e.toUpperCase() : e.toLowerCase();
      }).join('')
  }).join(' ')
}

// Using Regex
function toWeirdCase(str) {
  return str.replace(/(\w{1,2})/g, (e) => e[0].toUpperCase() + e.slice(1));
}


console.log(toWeirdCase('String'), 'StRiNg');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');