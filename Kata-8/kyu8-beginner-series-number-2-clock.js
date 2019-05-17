// https://www.codewars.com/kata/beginner-series-number-2-clock

// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to miliseconds.

// #####Example:

// past(0, 1, 1) == 61000
// Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!

// My Answer
function past(h, m, s){
    return (h * 3600000) + (m * 60000) + (s * 1000);
}

// Best Practice
function past(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}
console.log(past(0,1,1),61000)
console.log(past(1,1,1),3661000)
console.log(past(0,0,0),0)
console.log(past(1,0,1),3601000)
console.log(past(1,0,0),3600000)