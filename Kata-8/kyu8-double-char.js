// https://www.codewars.com/kata/double-char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "

// My Answer
function doubleChar(str) {
    let doubleArr = [];
    let split = str.split('')
    for(let i = 0; i < split.length; i++) {
        doubleArr.push(split[i], split[i])
    }
    return doubleArr.join('')
}

// Best Practice
const doubleChar = str => str.split('').map(e => e + e).join('');

console.log((doubleChar("abcd"))) // "aabbccdd";
console.log((doubleChar("Adidas")))  // "AAddiiddaass";