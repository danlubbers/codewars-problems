// https://www.codewars.com/kata/find-the-stray-number/train/javascript

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// My Answer
function stray(numbers) {
    let matchingNum = 0;

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] == numbers[i + 1]) {
            matchingNum =numbers[i]
        } 
    }

    return +numbers.filter(e => e !== matchingNum)
}

// Best Practice
function stray(numbers) {
    for (var i in numbers) {
        if(numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
            return numbers[i]    
        }
    }    
}

// Most Clever
// const stray = nums => nums.reduce((a, b) => a ^ b);

// Another way
function stray(numbers) {
    let sorted = numbers.sort();

    if(sorted[0] !== sorted[1]) {
        return sorted[0]
    } else {
        return sorted[sorted.length-1]
    }
}

console.log(stray([1, 1, 2]), 2);
console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3)