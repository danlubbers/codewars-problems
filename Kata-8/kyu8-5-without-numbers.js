// https://www.codewars.com/kata/5-without-numbers/train/javascript

// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/


// My Answer
function unusualFive() {
  return 'hello'.length;
}

// Clever
unusualFive=_=>'     '.length;

// Clever
function unusualFive() {
  return "".charCodeAt(); 
}

console.log(unusualFive());
