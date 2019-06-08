// https://www.codewars.com/kata/word-count/train/javascript

// Can you realize a function that returns word count from a given string?

// You have to ensure that spaces in string is a whitespace for real.

// What we want and finish of work:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we got for your code:

// Function have to count words, but not spaces, so be sure that it does right.
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
// Be sure that words with chars like -, ', ` are counted right.

// My Answer
function countWords(str) {
    if(str.length === 0) return 0;
    return str.split(/\s/g).filter(e => e !== '').length;
    // can just use .filter(Boolean).length
}

// Best Practice
function countWords(str) {
    return (str.match(/[^\s]+/g) || []).length;
}


 
console.log(countWords("Hello"), 1);
console.log(countWords("Hello, World!"), 2);
console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), 19);
console.log(countWords(""), 0);
console.log(countWords("With! Symbol@ #Around! (Every) %Word$"), 5);
console.log(countWords("Dear   Victoria, I love  to press   space button."), 8);

console.log(countWords(" Arthur "), 1);
console.log(countWords(" David"), 1);
console.log(countWords("Nelson "), 1);
console.log(countWords("  Hello Gomer  "), 2);
console.log(countWords("  Hello     Bart  "), 2);

console.log(countWords("﻿Hello﻿World "), 2);
console.log(countWords("Hello﻿World"), 2);

console.log(countWords("I'm looking so cool today"), 5);
console.log(countWords("Can you verify my comma-separated tagline?"), 6);