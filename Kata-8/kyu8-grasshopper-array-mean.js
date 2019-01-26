// https://www.codewars.com/kata/grasshopper-array-mean

// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

// My Answer and Best Practice
var findAverage = function (nums) {
    return nums.reduce((acc, val) => (acc + val), 0) / nums.length;
}

// Using For In Loop
function findAverage(nums) {
    let sum = 0;

    for(i in nums) {
        sum += nums[i]
    }
    return sum / nums.length
}

console.log(findAverage([1]), 1)
console.log(findAverage([1, 3, 5,7]), 4)