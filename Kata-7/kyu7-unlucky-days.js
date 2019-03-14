// https://www.codewars.com/kata/unlucky-days

// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year as an integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// My Answer
function unluckyDays(year){
    let d = new Date()
    let counter = 0;
    
    for(let i = 0; i < 12; i++) {
        // 13 is the unlucky number we are looking to match
        d.setFullYear(year, i, 13)
        // 5 represents friday, the fifth day of the week according to ISO
        // Everytime the day matches friday the 13th the counter increments
            if (d.getDay() == 5) counter++;
    }
    return counter;
}

// Best Practice
function unluckyDays(year) {
    let unlucky = 0;

    for(let i = 0; i < 12; i++) {
        if(new Date(year, i, 13).getDay() === 5) {
            unlucky++
        }
    }
    return unlucky;
}

// ES6
function unluckyDays(year) {
    return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
}


console.log(unluckyDays(1586), 1, "should be: 1");
console.log(unluckyDays(1001), 3, "should be: 3");
console.log(unluckyDays(2819), 2, "should be: 2");
console.log(unluckyDays(2792), 2, "should be: 2");
console.log(unluckyDays(2723), 2, "should be: 2");
console.log(unluckyDays(1909), 1, "should be: 1");
console.log(unluckyDays(1812), 2, "should be: 2");
console.log(unluckyDays(1618), 2, "should be: 2");
console.log(unluckyDays(2132), 1, "should be: 1");
console.log(unluckyDays(2065), 3, "should be: 3");

// Failing 
console.log(unluckyDays(1139), 2, "should be: 2");
console.log(unluckyDays(1301), 1, "should be: 1");
console.log(unluckyDays(2586), 2, "should be: 2");