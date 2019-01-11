// https://www.codewars.com/kata/alternate-square-sum

// Write a method alternate_sq_sum() (JS: alternateSqSum ) that takes an array of integers as input and finds the sum of squares of the elements at even positions (i.e., 2nd, 4th, etc.) plus the sum of the rest of the elements at odd position.

// NOTE:
// The values at even position need to be squared. For a language with zero-based indices, this will occur at oddly-indexed locations. For instance, in Python, the values at indices 1, 3, 5, etc. should be squared because these are the second, fourth, and sixth positions in the list.

// For Example:
// alternateSqSum([11, 12, 13, 14, 15]) // should return 379
// Explanation:
// Elements at indices 0, 2, 4 are 11, 13, 15 and they are at odd positions as 11 is at position #1, 13 is at position #3 and 15 at #5.

// Elements at indices 1, 3 are 12 and 14 and they are at even position. So we need to add 11, 13, 15 as they are and square of 12 and 14

// --> 11 + 13 + 15 + 12^2 + 14^2
// = 11 + 13 + 15 + 144 + 196
// = 379

// For empty arrays, result should be 0 (zero)

function alternateSqSum(arr){
    let arrSquared = 0;
    let arrOdd = 0;
    for(let i = 0; i < arr.length; i++) {
    //    console.log(arr[i])
        if(arr.length === 0) {
            sum += 0
        } else if(arr[i] % 2 === 0) {
            arrSquared += (arr[i] * arr[i])
        } else {
            arrOdd += arr[i] 
        }  
    }
   return arrSquared + arrOdd
}

console.log(alternateSqSum([]),0)
console.log(alternateSqSum([1,2,3,4,5]),29)
console.log(alternateSqSum([-1,0,-3,0,-5,3]),0)
console.log(alternateSqSum([-1,2,-3,4,-5]),11)
  