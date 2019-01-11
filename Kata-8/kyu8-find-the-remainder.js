// https://www.codewars.com/kata/find-the-remainder

// Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.

// My Answer
function remainder(a, b){
    if((a || b) === 0) {
        return NaN
    } else if(a > b) {
        return a % b
    } else {
        return b % a
    }    
}

// My ES6 way 
const remainder = (a, b) =>  (a || b) === 0 ? NaN : (a > b ? a % b : b % a)

console.log(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible.');
console.log(remainder(13, 72), 'The order the arguments are passed should not matter.');
console.log(remainder(1, 0), 'Divide by zero should return NaN');
console.log(remainder(0, 0), 'Divide by zero should return NaN');