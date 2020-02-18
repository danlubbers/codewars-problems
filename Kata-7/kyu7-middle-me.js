// https://www.codewars.com/kata/59cd155d1a68b70f8e000117/train/javascript 

// Write a function that will take a key of X and place it in the middle of Y repeated N times.

// Extra challege (not tested): You can complete this with under 70 characters without using regex. Challenge yourself to do this. It wont be best practices but it will work.

// Rules:

// If X cannot be placed in the middle, return X.

// N will always be > 0.

// Example:

// X = 'A';

// Y = '*';

// N = 10;

// Y repeated N times = '**********';

// X in the middle of Y repeated N times = '*****A*****';

// My Answer
function middleMe(n, x, y){
  let filledArr = new Array(n).fill(y).join('');
  let insert = filledArr.substr(0, n / 2);
  return n % 2 === 0 ? insert + x + insert : x;
}

// Best Practice
function middleMe(n, x, y) {
  return n % 2 ? x : y.repeat(n/2) + x + y.repeat(n/2); 
}

console.log(middleMe(18, 'z', '#'), '#########z#########');
console.log(middleMe(19, 'z', '#'), 'z');