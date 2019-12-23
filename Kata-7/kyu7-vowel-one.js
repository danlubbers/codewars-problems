// https://www.codewars.com/kata/vowel-one/train/javascript

// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

// My Second Answer
function vowelOne(s){
  return  s.split('').map(e => e.match(/[aeiou]/gi) ? 1 : e)
           .map(e => typeof e === 'string' ? e.replace(/\W|\w|\d/gi, 0) : e).join('');
}

// Best Practice and my first answer but I had it backwards so it didn't work!
function vowelOne(s) {
  return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
}

console.log( vowelOne( "vowelOne" ), "01010101" );
console.log( vowelOne( "123, arou" ), "000001011" );
console.log( vowelOne( "eINAo_*oEAAOzD:uq85EOUqrIPE" ), "000001011" );
