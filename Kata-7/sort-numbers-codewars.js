// https://www.codewars.com/kata/sort-numbers

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// My Answer
function solution(arr){
    if (arr === null) {
        return []
    } else {    
        return arr.sort((a, b) => a - b)
    }
}

// Best Practice
function solution(nums) {
    return (nums || []).sort((a,b) => a - b);    
}

console.log(solution([1, 2, 10, 50, 5])) // should return [1,2,5,10,50]
console.log(solution(null)); // should return []

