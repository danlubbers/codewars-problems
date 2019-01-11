// https://www.codewars.com/kata/sort-array-by-string-length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// My Answer
function sortByLength (arr) {
    return arr.map(e => e).sort((a, b)=> a.length - b.length);
};

// Best Practice - ACTUALLY DIDN'T NEED TO MAP OVER IT
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };

console.log(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
console.log(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
