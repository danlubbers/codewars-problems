// https://www.codewars.com/kata/get-character-from-ascii-value

// Write a function getChar/GetChar/get_char which takes a number and returns the corresponding ASCII char for that value.

function getChar(character) {
 return String.fromCharCode(character);
}


console.log((getChar(55))) // 7
console.log((getChar(56))) // 8
console.log((getChar(57))) // 9
console.log((getChar(58))) // :
console.log((getChar(60))) // <
console.log((getChar(65))) // A