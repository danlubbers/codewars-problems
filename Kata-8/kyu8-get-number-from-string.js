// https://www.codewars.com/kata/get-number-from-string/train/javascript

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// ####javascript

// getNumberFromString(s)

// My Answer & Best Practice
function getNumberFromString(s) {
    return +s.replace(/\D/g, '');
}

// Using filter
function getNumberFromString(s) {
    return parseInt(s.split("").filter(x => !isNaN(parseInt(x))).join(""));
}


console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);
