// https://www.codewars.com/kata/is-the-date-today

// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by just checking just the day.

// My Answer
function isToday(date) {
    return date.toDateString() === new Date().toDateString();
}

// Different method I found on: https://flaviocopes.com/how-to-determine-date-is-today-javascript/
// const isToday = (someDate) => {
//     const today = new Date()
//     return someDate.getDate() == today.getDate() &&
//       someDate.getMonth() == today.getMonth() &&
//       someDate.getFullYear() == today.getFullYear()
// }

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

console.log(isToday(new Date()), true);
console.log(isToday(tomorrow), false);
console.log(isToday(yesterday), false);