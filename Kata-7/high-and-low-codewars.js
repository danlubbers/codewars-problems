// https://www.codewars.com/kata/highest-and-lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// My Answer
function highAndLow(str) {
    let arr = str.split(' ')
    let mapped = arr.map(e => e) 
    let max = Math.max.apply(null, mapped);
    let min = Math.min.apply(null, mapped);
    return `${max} ${min}`
}

// The way I did it at DevMountain 
function highAndLow(str){
    let arr = str.split(' ')
    let max =  Math.max(...arr)
    let min =  Math.min(...arr)
    return max + ' ' + min 
}

// Best Practice
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");