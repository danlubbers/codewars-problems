// https://www.codewars.com/kata/are-we-alternate/train/javascript

// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true

// My Answer
function isAlt(word) {
    // regex example x|y - /green|red/ matches 'green' in green apple and 'red'in red apple.
    // {n,} Matches at least n occurances of the preceding expression.
    // Ex. /a{2}/ will match 'aa', 'aaaa' and 'aaaaaa' but not 'a'
    return !word.match(/[^aeiou]{2,}|[aeiou]{2,}/gi);
}

// Best Practice
function isAlt(word) {
    return !/[aeiou]{2}|[^aeiou]{2}/.test(word);
}

// For Loop
function isAlt(word) {
    for(let i = 1; i < word.length; i++) {
        if('aeiou'.includes(word[i]) === 'aeiou'.includes(word[i-1])) {
            return false;
        }
    }
    return true;
}

console.log(isAlt("amazon")) // true
console.log(isAlt("apple")) // false
console.log(isAlt("banana")) // true

console.log(isAlt("ejeee")) // false