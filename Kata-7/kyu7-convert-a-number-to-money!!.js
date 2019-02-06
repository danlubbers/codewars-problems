// https://www.codewars.com/kata/convert-a-number-to-money

// Simplified number to money converter.

// Note:

// truncate to 2 decimal places
// don't keep trailing zeros
// input will be a positive number with at least two trailing digits
// Examples:

// 2546.2562 --> '2,546.25'

// 1500.342626 --> '1,500.34'

// 100.2134 --> '100.21'

// Taken from 'Formatting a number as price' (Kyu 5)

// My Answer
function numberToMoney(n) {
    return (Math.trunc(n * 100) / 100).toLocaleString();
}

// Best Practice Using Regex
function numberToMoney(n) {
    return String(Math.floor(n * 100) / 100).replace(/\B(?=(\d{3)+(?!\d))/g, ',');
}

console.log(numberToMoney(2546.2562), '2,546.25');
console.log(numberToMoney(1500.342626), '1,500.34');
console.log(numberToMoney(100.2134), '100.21');