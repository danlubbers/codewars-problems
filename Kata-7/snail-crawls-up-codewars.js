// https://www.codewars.com/kata/snail-crawls-up

// The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

// Your function takes three arguments:

// 1. The height of the column (meters)
// 2. The distance that the snail crawls during the day (meters)
// 3. The distance that the snail slides down during the night (meters)
// Calculate number of day when the snail will reach the top of the column.

// My Answer 
function snail(column, day, night) {
    return Math.max(0, Math.ceil((column - day) / (day - night)))+1
}

// Best Practice
function snail(column, day, night) {
    let days = (column - night) / (day - night)
    return days < 1 ? 1 : Math.ceil(days)
}

console.log(snail(3,2,1) , 2);
console.log(snail(10,3,1) , 5);
console.log(snail(10,3,2) , 8);
console.log(snail(68,68,62) , 1);
// To pass the two below is where we add the 0 in Math.max
console.log(snail(40,107,99) , 1);
console.log(snail(6,51,12) , 1);