// https://www.codewars.com/kata/reversed-strings

// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'


function solution(str){
    return str.split('').reverse().join('')
}
console.log((solution('world') == 'dlrow'))
