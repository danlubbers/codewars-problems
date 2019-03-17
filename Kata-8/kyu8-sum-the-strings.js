// https://www.codewars.com/kata/sum-the-strings

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

//   sumStr("4", "5")    // should output "9"
//   sumStr("34", "5")   // should output "39"
// If either input is an empty string, consider it as zero.

// My Answer
function sumStr(a,b) {
    return (+a + +b).toString();
}

// Best Practice
function sumStr(a, b) {
    return String(Number(a) + Number(b));
}

// Most Clever
function sumStr(a, b) {
    return (+a + +b) + '';
}


console.log(sumStr("4","5"), "9");
console.log(sumStr("34","5"), "39");