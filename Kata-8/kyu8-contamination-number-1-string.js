// https://www.codewars.com/kata/contamination-number-1-string/train/javascript

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// My Answer
function contamination(text, char){
    if (text === '' || char === '') return '';
    
    let length = text.length;

    let newStr = '';
    for (let i = 0; i < length; i++) {
        newStr += char;
    }
    return newStr;
}

// Best Practice
function contamination(text, char) {
    return char.repeat(text.length);
}

// Using Regex
function contamination(text, char) {
    return text.replace(/./g, char);
}

console.log(contamination("abc","z"), "zzz")
console.log(contamination("","z"), "")
console.log(contamination("abc",""), "")
console.log(contamination("_3ebzgh4","&"), "&&&&&&&&")
console.log(contamination("//case"," "), "      ")