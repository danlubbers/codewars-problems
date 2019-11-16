// https://www.codewars.com/kata/v-a-p-o-r-c-o-d-e/train/javascript

// ASC Week 1 Challenge 4 (Medium #1)

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Examples:

//   vaporcode("Lets go to the movies") // output => "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
//   vaporcode("Why isn't my code working?") // output => "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

// My Answer
function vaporcode(str) {
  return str.toUpperCase().split(' ').join('').split('').join('  ');
}

// Best Practice
function vaporcode(str) {
  return Array.from(str.replace(/\s+/g, '').toUpperCase()).join('  ');
}

console.log(vaporcode("Let's go to the movies"),"L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
console.log(vaporcode("Why isn't my code working?"),"W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?");