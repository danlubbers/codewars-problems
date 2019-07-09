// https://www.codewars.com/kata/parse-float/train/javascript

// Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing (for Python None, for Javascript null) if conversion is not possible.

// My Answer & Best Practice
function parseF(s) {
    return Number.isNaN(parseFloat(s)) ? null : parseFloat(s);
}

// Using regex
function parseF(s) {
    return /\d+/.test(s) ? +s : null;
}



console.log(parseF("1"), 1.0);
console.log(parseF("one"), null);