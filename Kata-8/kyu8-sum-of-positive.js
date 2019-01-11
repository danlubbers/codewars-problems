// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Without Using Higher Order Functions
function positiveSum(arr) {
    let filtered = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            filtered += arr[i]
        }
    }
    return filtered
}


// Higher Order Functions
function positiveSum(arr) {
    let filtered = arr.filter(e => e > 0)
    let sum = filtered.reduce((acc, val) => {
        return acc + val
    }, 0)
    return sum
}

// Higher Order Functions shown above but less code
function positiveSum(arr) {
    return arr.filter(e => e > 0).reduce((acc, val) => acc + val, 0)
}


console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);