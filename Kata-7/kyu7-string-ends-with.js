// https://www.codewars.com/kata/string-ends-with

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My Answer
function solution(str, ending){
    return str.endsWith(ending);
}

// Best Practice
function solution(str, ending) {
    return new RegExp(ending+"$", "i").test(str)
}

// Using Substring
function solution(str, ending) {
    return str.substr(-ending.length) == ending
}

console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)