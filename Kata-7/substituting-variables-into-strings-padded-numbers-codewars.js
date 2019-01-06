// https://www.codewars.com/kata/substituting-variables-into-strings-padded-numbers

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

// My Answer with template string
function solution(value){
    return `Value is ${`00000${value}`.slice(-5)}`
}

// Best Practice
function solution(value) {
    return "Value is " + ("00000" + value).slice(-5);
}

console.log(solution(5),"Value is 00005")
console.log(solution(1204),"Value is 01204")
console.log(solution(109),"Value is 00109")