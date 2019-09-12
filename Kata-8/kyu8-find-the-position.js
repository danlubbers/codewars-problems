// https://www.codewars.com/kata/find-the-position/train/javascript

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

const alphabet = [ 'a', 'b', 'c', 'd', 'e',
                   'f', 'g', 'h', 'i', 'j',
                   'k', 'l', 'm', 'n', 'o',
                   'p', 'q', 'r', 's', 't',
                   'u', 'v', 'w', 'x', 'y',
                   'z' ];

// My Answer & Best Practice
function position(letter) {
    return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}

// Most Clever
function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}


console.log(position("a"),"Position of alphabet: 1");
console.log(position("z"),"Position of alphabet: 26");
console.log(position("e"),"Position of alphabet: 5");