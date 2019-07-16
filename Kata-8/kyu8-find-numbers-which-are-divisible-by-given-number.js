// https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number/train/javascript

// Complete the function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is an array of numbers and the second is the divisor.

// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

// My Answer
function divisibleBy(numbers, divisor){
    let arr = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % divisor === 0) {
            arr.push(numbers[i])
        }
    }
    return arr
}

// Best Practice
function divisibleBy(numbers, divisor){
    return numbers.filter(e => e % divisor === 0);
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2)) // [2, 4, 6];