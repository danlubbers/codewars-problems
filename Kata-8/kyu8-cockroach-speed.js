// https://www.codewars.com/kata/beginner-series-number-4-cockroach

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// cockroachSpeed(1.08) == 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(num) {
    return Math.floor(27.7777778 * num)
}

console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);