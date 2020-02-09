// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

// Write a function named sumEvenNumbers, taking an array of integers as single parameter. Your function must return the sum of the even values of this array.

// For example, considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).

// My Answer
function sumEvenNumbers(input) {
  return input.filter(e => e % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

// Most Clever
function sumEvenNumbers(input) {
  return input.reduce((acc, curr) => acc + (curr % 2 ? 0 : curr), 0);
}

// Using For Loop
function sumEvenNumbers(input) {
  let result = 0;
  
  for(let i = 0; i < input.length; i++) {
    if(input[i] % 2 === 0) {
      result += input[i];
    }
  }
  return result
}


console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
30,)