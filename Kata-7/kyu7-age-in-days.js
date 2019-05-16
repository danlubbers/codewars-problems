// https://www.codewars.com/kata/age-in-days/train/javascript

// Did you ever want to know how many days you are old? Write a function ageInDays which returns your age in days.

// For example if today is 30 November 2015 then

// ageInDays(2015, 11, 1) returns "You are 29 days old"
// The birthday is entered as integers in the following order

// ageInDays(year, month, day)
// For example if you are born 27 November 2007 then call ageInDays(2007, 11, 27).

// Your birthday is expected to be in the past.

// My Answer, not sure if it's actually correct, but it passed
function ageInDays(year, month, day) {
    console.log(year, month, day)
        let birth = new Date(year, month - 1, day);
        let today = new Date();
        console.log((today - birth) / 1000 / 60 / 60 / 24)
    
        let ageMilli = today - birth;
        let ageSec = ageMilli / 1000;
        let ageMin = ageSec / 60;
        let ageHours = ageMin / 60;
        let ageDays = Math.floor(ageHours / 24);
    
        return `You are ${ageDays} days old`
}

// Best Practice
const ageInDays = (y, m, d) => 'You are ' + (new Date() - new Date().setFullYear(y, m - 1, d)) / 86400000 + ' days old';

console.log(ageInDays(1980, 4, 28))
console.log(ageInDays(2019, 4, 23)) // You are 2 days old
console.log(ageInDays(2018, 4, 25)) // You are 365 days old