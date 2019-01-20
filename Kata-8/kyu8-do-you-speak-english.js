// https://www.codewars.com/kata/do-you-speak-english

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

// My Answer
function spEng(str){
    let lower = str.toLowerCase();
    return lower.includes('english')
}

// Best practice
function spEng(s) {
    return /english/i.test(s);
}

console.log(spEng("english"), true);
console.log(spEng("egnlish"), false);