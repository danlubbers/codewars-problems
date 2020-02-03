// https://www.codewars.com/kata/5738f5ea9545204cec000155/train/javascript

// Bob is a lazy man.

// He needs you to create a method that can determine how many letters and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

// My Answer
function countLettersAndDigits(input) {
  return input.match(/[A-Z]|\d/gi) ? input.match(/[A-Z]|\d/gi).length : 0; 
}

// Best Practice
function countLettersAndDigits(input) {
  return input.replace(/[^a-z\d]/gi, '').length;
}

// I found clever
let countLettersAndDigits = (input) => (input.match(/[A-Za-z0-9]/g) || '').length;

console.log(countLettersAndDigits("hel2!lo"), 6);
console.log(countLettersAndDigits("n!!_ice!!123"), 7);
console.log(countLettersAndDigits("1"), 1);
console.log(countLettersAndDigits("?"), 0);
console.log(countLettersAndDigits("12345f%%%t5t&/6"), 10);
console.log(countLettersAndDigits("aBcDeFg090"), 10);
console.log(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);