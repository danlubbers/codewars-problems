// https://www.codewars.com/kata/sum-of-differences-in-array

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example: sumOfDifferences([1, 2, 10] Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0.

// My Answer
function sumOfDifferences(arr) {
    return arr.sort((a, b) => b - a)
        .reduce((acc, curr, index, arr) => {
            return index + 1 < arr.length ? acc + curr - arr[index + 1] : acc
        }, 0) 
}

// Best Practice
// function sumOfDifferences(arr) {
//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }

// If Statement 
// function sumOfDifferences(arr) {
//     if (arr.length <= 1) 
//         return 0
//     arr.sort((a, b) => a - b)
//     return arr[arr.length - 1] - arr[0]
// }

console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
console.log(sumOfDifferences([-1, 7, -8, 12, -4, 2, 0]), 20);
console.log(sumOfDifferences([-3]), 0);
console.log(sumOfDifferences([]), 0);
console.log(sumOfDifferences([{}]), 0);
