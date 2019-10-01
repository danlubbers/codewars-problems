// https://www.codewars.com/kata/limit-string-length-1/train/javascript

// Complete the solution, so that it returns the truncated version of the string followed by '...'.

// Example:

// solution('Testing String',3) // should return 'Tes...'
// solution('Testing String',8) // should return 'Testing ...'
// solution('Test',8) // should return 'Test'

// My Answer
function solution(string,limit){
    let sub = string.substring(0, limit);
    if(string.length <= limit) return sub;
    return `${sub}...`;
}

// Best Practice
function solution(string, limit) {
    return string.length > limit ? string.substring(0, limit) + '...' : string;
}   

console.log(solution('Testing String',3)) // should return 'Tes...'
console.log(solution('Testing String',8)) // should return 'Testing ...'
console.log(solution('Test',8)) // should return 'Test'
console.log(solution('Test',4)) // should return 'Test'