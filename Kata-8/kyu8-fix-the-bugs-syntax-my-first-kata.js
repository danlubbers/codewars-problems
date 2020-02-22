// https://www.codewars.com/kata/56aed32a154d33a1f3000018/train/javascript

// Fix the Bugs (Syntax) - My First Kata
// Overview
// Hello, this is my first Kata so forgive me if it is of poor quality.

// In this Kata you should fix/create a program that returns the following values:

// false/False if either a or b (or both) are not numbers
// a % b plus b % a if both arguments are numbers
// You may assume the following:

// If a and b are both numbers, neither of a or b will be 0.

function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
   return a % b + b % a;
  }
}

console.log(myFirstKata(3,5),(3 % 5 + 5 % 3));
console.log(myFirstKata("hello",3),false);
console.log(myFirstKata(67,"bye"),false);
console.log(myFirstKata(true,true),false);
console.log(myFirstKata(314,107),(107 % 314 + 314 % 107));
console.log(myFirstKata(19483,9),(9 % 19483 + 19483 % 9));