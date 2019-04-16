// https://www.codewars.com/kata/reverse-words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// My Answer and Best Practice
function reverseWords(str) { 
    return str.split(' ').map(e => e.split('').reverse().join('')).join(' ')
}

// Using For Loop
function reverseWords(str) {
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr.split(' ').reverse().join(' ')
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
// console.log(reverseWords('apple'),'elppa');
// console.log(reverseWords('a b c d'),'a b c d');
// console.log(reverseWords('double  spaced  words'),'elbuod  decaps  sdrow');