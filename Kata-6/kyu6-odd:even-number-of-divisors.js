// https://www.codewars.com/kata/55830eec3e6b6c44ff000040/train/javascript

// Given an integer n return 'odd' if the number of its divisors is odd. Otherwise return 'even'.

// Examples:

// All prime numbers have exactly two divisors (hence 'even')

// For n=12 the divisors are [1,2,3,4,6,12] – 'even'

// For n=4 the divisors are [1,2,4] – 'odd'

// My Answer works but apparently times out which is not described as one of the test for performance optimization
function oddity(n) {
  let divisors = 0;

  for(let i = n; i > 0; i--) {
    if(Number.isInteger(n / i)) divisors++
  }

  return divisors % 2 === 0 ? 'even' : 'odd';
}

// My Second Answer after googling a bit
function oddity(n){
  return Math.sqrt(n) % 1 == 0 ? "odd" : "even";
}


console.log(oddity(1),'odd');
console.log(oddity(5),'even');
console.log(oddity(16),'odd');