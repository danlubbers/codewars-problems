// https://www.codewars.com/kata/vowel-remover

// Create a function called shortcut to remove all the lowercase vowels in a given string.

// Examples
// shortcut("codewars") // --> cdwrs
// shortcut("goodbye")  // --> gdby
// Don't worry about uppercase vowels.

// My Answer
function shortcut(str) {
    return str.replace(/[aeiou]/gi, '');
}

console.log(shortcut("codewars")) // --> cdwrs
console.log(shortcut("goodbye"))  // --> gdby