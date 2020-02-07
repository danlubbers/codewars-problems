// https://www.codewars.com/kata/58c9322bedb4235468000019/train/javascript

// Write a function that returns true if the number is a "Very Even" number.

// If the number is odd, it is not a "Very Even" number.

// If the number is even, return whether the sum of the digits is a "Very Even" number.

// #Examples:

// input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

// input(222) => returns true

// input(5) => returns false

// My Answer
function isVeryEvenNumber(n) {
  let num = n;

  while(String(num).length > 1) {
    num = String(num).split('').reduce((acc, curr) => {
      return +acc + +curr ;    
    });
  }

  return num % 2 === 0;
}

// Most Clever
function isVeryEvenNumber(n) {
  return !n-- || n % 9 % 2 === 1;
}

console.log(isVeryEvenNumber(0)) // true
console.log(isVeryEvenNumber(4)) // true 
console.log(isVeryEvenNumber(12)) // false
console.log(isVeryEvenNumber(222)) // true
console.log(isVeryEvenNumber(236)) // true

