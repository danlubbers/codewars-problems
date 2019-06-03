// https://www.codewars.com/kata/training-js-number-19-methods-of-string-object-touppercase-tolowercase-and-replace/train/javascript

// Coding in function ```alienLanguage```, function accept 1 parameter:```str```. ```str``` is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

// for example:

// ```
// alienLanguage("My name is John") should return "My NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo WORLd"
// ```
// A small hint: The first conversion of the entire string will make the code easier

// My Answer
function alienLanguage(str){    
    return str.split(' ').map(e => e.slice(0, -1).toUpperCase() + e.slice(-1).toLowerCase()).join(' ');
}

// Best Practice with Regex
function alienLanguage(str) {
    return str.replace(/\w+/g, e => e.slice(0, -1).toUpperCase() + e.slice(-1).toLowerCase());
}

// Using For Loop
function alienLanguage(str) {
    let words = str.toUpperCase().split(' ');
    
    for (let i = 0; i < words.length; i++) {
        let precedingChars = words[i].slice(0, -1);
        console.log(precedingChars)
        let lastChar = words[i].slice(-1).toLowerCase();
        console.log(lastChar)
        words[i] = precedingChars + lastChar;
    }
    return words.join(' ');
}

console.log(alienLanguage("My name is John") , "My NAMe Is JOHn");
console.log(alienLanguage("this is an example") , "THIs Is An EXAMPLe");
console.log(alienLanguage("Hello World") , "HELLo WORLd");
console.log(alienLanguage("HELLO WORLD") , "HELLo WORLd");
