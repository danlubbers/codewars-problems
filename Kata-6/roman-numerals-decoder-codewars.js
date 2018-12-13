// https://www.codewars.com/kata/roman-numerals-decoder

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// First Attempt - Works on everything except IV which return 6 instead of 4
// function solution(roman){
//     let value = 0;
//     let arr = roman.split('')

//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'I') {
//             value += 1
//         } else if(arr[i] === 'V') {
//             value += 5
//         } else if(arr[i] === 'X') {
//             value += 10
//         } else if(arr[i] === 'L') {
//             value += 50
//         } else if(arr[i] === 'C') {
//             value += 100
//         } else if(arr[i] === 'D') {
//             value += 500
//         } else if(arr[i] === 'M') {
//             value += 1000
//         }
//     }
//    return value;
// }

// Second answer after googling for different ways other than what I have listed above
// function solution(roman) {
//     let map = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
//     let sum = 0;

//     for (let i = 0; i < roman.length; i++) {
//         let current = map[roman[i]];
//         // console.log(current)
//         let next = map[roman[i + 1]] || 0;
//         // console.log(next)

//         if (current < next) {
//             sum += next - current;
//             i++;
//         } else {
//             sum += current;
//         }
//     }
//     return sum;
// }

// Best Practice with some adjustments I made
function solution(roman) {
  var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
//   var numbers = roman.split('');
  var sum = 0;

  for(i = 0; i < roman.length; i++) {
    if(data[roman[i]] < data[roman[i+1]]) {
      sum += data[roman[i+1]] - data[roman[i]];
      i++;
    } else {
      sum += data[roman[i]];
    }
  }
  
  return sum;
}

console.log(solution('I')) // 1
console.log(solution('IV')) // 4
console.log(solution('XXI')) // 21
console.log(solution('MMVIII')) // 2008