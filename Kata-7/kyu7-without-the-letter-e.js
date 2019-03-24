// https://www.codewars.com/kata/without-the-letter-e/train/javascript

// Is it possible to write a book without the letter 'e' ?

// Task
// Given String str, return:

// How much "e" does it contains (case-insensitive) - return number as String.
// If given String doesn't contain any "e", return: `"There is no "e"."`
// If given String is empty, return empty String.
// If given String is `null`/`None`/`nil`, return `null`/`None`/`nil`
// FUNDAMENTALSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES

// My Answer
function findE(str){
    let regex = /[e]/gi;

    if(str.match(regex)) return String(str.match(regex).length);
    if(str === '') return 'empty String;'
    if(!str.match(regex)) return 'There is no "e".';
}

// Best Pracitce
function findE(str) {
    let res = (str.match(/e/gi) || []).length;
    return res ? '' + res : str ? 'There is no "e".' : str;
}

// Try and Catch method
function findE(str) {
    try {
        return str && String(str.match(/e/gi).length);
    } catch(err) {
        return 'There is no "e".';
    }
}
 
console.log(findE("e"), "1", "Should return 1");
console.log(findE("English"), "1", "Should return 1");
console.log(findE("XSvz"), 'There is no "e"');