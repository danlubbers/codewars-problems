// https://www.codewars.com/kata/get-ascii-value-of-character

// get ascii value of character

// write a function getASCII which inputs a character and returns the corresponding ascii value for that character. Example : getASCII('A') => 65

// for ASCII table, you can refer to http://www.asciitable.com/

// My Answer
function getASCII(char) {
    return char.charCodeAt();
}

// ES6
const getASCII = char => char.charCodeAt(0)

console.log((getASCII('A')))
console.log((getASCII(' ')))
console.log((getASCII('!')))