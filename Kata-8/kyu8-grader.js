// https://www.codewars.com/kata/grader

// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	'F'
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"

// Examples:

// grader(0.9) == 'A'
// grader(0.3) == 'F'
// grader(234) == 'F'
// grader(0.75) == 'C'

// My Answer with Ternary using 1 line of code
function grader(score) {
  return score > 1.0 ? 'F' : (score >= 0.9 ? 'A' : (score >= 0.8 ? 'B' : (score >= 0.7 ? 'C' : (score >= 0.6 ? 'D': 'F'))))
}

// Best Practice
// function grader(score) {
//     if (score > 1 || score < 0.6) return "F";
//         else if (score >= 0.9) return 'A';
//         else if (score >= 0.8) return 'B';
//         else if (score >= 0.7) return 'C';
//         else if (score >= 0.6) return 'D';
// }

console.log(grader(0.7), "C");
console.log(grader(0.9), "A");
console.log(grader(0.6), "D");
console.log(grader(1.4681990002043805), 'F')