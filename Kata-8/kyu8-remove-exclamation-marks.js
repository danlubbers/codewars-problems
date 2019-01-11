// https://www.codewars.com/kata/remove-exclamation-marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My Answer
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");