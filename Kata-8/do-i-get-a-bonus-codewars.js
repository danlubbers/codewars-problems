// https://www.codewars.com/kata/do-i-get-a-bonus

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS and Java) or "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell).

// My Answer
function bonusTime(salary, bonus) {
    if(bonus === true) {
        return `£${salary * 10}`
    } else {
        return `£${salary}`
    }
}

// Best Practice
function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`;
}

console.log((bonusTime(25000, true))); //'£250000'
console.log((bonusTime(10000, false))); // , '£10000'
console.log((bonusTime(60000, false), '£60000'));
console.log((bonusTime(2, true), '£20'));