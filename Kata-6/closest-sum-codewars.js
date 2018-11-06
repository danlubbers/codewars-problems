// https://www.codewars.com/kata/closest-sum

// Given an array (ints) of n integers, find three integers in arr such that the sum is closest to a given number (num), target.

// Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example:

// closest_sum([-1, 2, 1, -4], 1) # 2 (-1 + 2 + 1 = 2)
// Note: your solution should not modify the input array.

const closestSum = (arr, num) => {
    let sumArr = [];
    let newArr = arr.slice()
    for(let i = 0; i <newArr.length; i++) {
        if(newArr[i] === num || newArr[i] > num) {
            sumArr.push(newArr[i])
        }
    }
    sumArr
    let sum = sumArr.reduce((acc, curr) => {acc + curr},0 )
    return sum
  }


console.log((closestSum([-1, 2, 1, -4], 1), 2))
// console.log((closestSum([5, 4, 0, 3], 3), 7))
// console.log((closestSum([1, 2, 3, 4], 4), 6))
// console.log((closestSum([-2, 2, -3, 1], 3), 1))