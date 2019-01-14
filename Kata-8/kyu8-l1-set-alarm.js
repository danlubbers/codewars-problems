// https://www.codewars.com/kata/l1-set-alarm

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false 
// setAlarm(false, true) -> false
// setAlarm(true, false) -> true

// My Answer
function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false;
}

// Best Practice
const setAlarm = (employed, vacation) => employed && !vacation;


console.log(setAlarm(true, true), "Should be false.");
console.log(setAlarm(false, true), "Should be false.");
console.log(setAlarm(true, false), "Should be true.");