// https://www.codewars.com/kata/even-odd-disparity

// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

// For example:
// solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.
// Let's now add two letters to the last example:

// solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters.

// My Answer
function solve(arr){
    let evens = 0;
    let odds = 0;

    for(let i = 0; i < arr.length; i++) {
        // or could have used 'arr[i] !== isNaN' instead of typeof
        if(arr[i] % 2 === 0 && typeof arr[i] === 'number') {
            evens += 1
        } else if(arr[i] % 2 !== 0 && typeof arr[i] === 'number'){
            odds += 1
        }
    }
    return evens - odds
};

// Best Practice
const solve = arr => arr.filter(n => n % 2 === 0).length - arr.filter(n => Math.abs(n % 2) === 1).length;

console.log(solve([0,1,2,3]),0);
console.log(solve([0,1,2,3,'a','b']),0);
console.log(solve([0, 15,'z',16,'m', 13, 14,'c', 9, 10, 13,'u', 4, 3]),0);
console.log(solve([13, 6, 8, 15, 4, 8, 13]),1);
console.log(solve([1,'a', 17, 8,'e', 3,'i', 12, 1]),-2);