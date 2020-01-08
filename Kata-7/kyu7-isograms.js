// https://www.codewars.com/kata/isograms/train/javascript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// My Answer
function isIsogram(str){
  return str.toLowerCase().split('').sort().join('').match(/(.)\1+/g) === null ? true : false;
}

// I like this one
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

// Most Clever
function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}


console.log( isIsogram("Dermatoglyphics"), true );
console.log( isIsogram("isogram"), true );
console.log( isIsogram("aba"), false, "same chars may not be adjacent" );
console.log( isIsogram("moOse"), false, "same chars may not be same case" );
console.log( isIsogram("isIsogram"), false );
console.log( isIsogram(""), true, "an empty string is a valid isogram" );
