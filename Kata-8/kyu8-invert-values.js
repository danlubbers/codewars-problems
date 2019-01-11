// https://www.codewars.com/kata/invert-values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// My First Answer
function invert(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(-arr[i])
        } else {
            newArr.push(Math.abs(arr[i]))
        }
    } 
    return newArr
}

// My Refactor with Higher Order Functions
const invert = arr => {
    return newArr = arr.map(e => e ? -e : Math.abs(e))
} 

// Best Practices
function invert(arr) {
    return arr.map(e => e === 0 ? e : -e);
}

console.log((invert([1,2,3,4,5])));
console.log((invert([1,-2,3,-4,5])));
console.log((invert([])));
console.log((invert([0])));