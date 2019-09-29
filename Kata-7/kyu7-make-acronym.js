// https://www.codewars.com/kata/make-acronym/train/javascript

// Write function toAcronym which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW

// My Answer & Best Practice
function toAcronym(input) {
    return input.split(' ').map(e => e[0].toUpperCase()).join('');
}

// Using Regex
function toAcronym(input) {
    return input.replace(/(\w).*?\b[^\w]*/g, "$1").toUpperCase();
}

// Another Regex way
function toAcronym(input) {
    // \b is search for a-zA-Z at the 'beginning' of a string
    let re = /\b[a-zA-Z]/g;
    let result = input.match(re);
    return result.join('').toUpperCase();
}

console.log(toAcronym("Code Wars")); // "CW"
console.log(toAcronym("Water Closet")); // "WC"
console.log(toAcronym("Portable Network Graphics")); // "PNG"
console.log(toAcronym("PHP: Hypertext Preprocessor")); // "PHP"
console.log(toAcronym("hyper text markup language")); // "HTML"

