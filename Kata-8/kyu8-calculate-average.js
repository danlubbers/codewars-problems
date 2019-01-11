// https://www.codewars.com/kata/calculate-average/train/javascript

// Write function avg which calculates average of numbers in given list.

// My Answer
function find_average(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum/arr.length
}

// Best Practices
function find_average(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0)
    return sum/arr.length
}

console.log((find_average([1,1,1])));
console.log((find_average([1,2,3])));