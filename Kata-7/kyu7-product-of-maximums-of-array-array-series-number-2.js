// https://www.codewars.com/kata/product-of-maximums-of-array-array-series-number-2/train/javascript

// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
// maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 2 whose gives product of maxima is 8 * 9 * 10 = 720 .
// maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
// Explanation:
// Since the size (k) equal 5 , then the subsequence of size 2 whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600 .
// maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is -4 * -1 = 4 .
// maxProduct ({10, 3, -1, -27} , 3)  return (-30)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 2 whose gives product of maxima is 10 * 3 * -1 = -30 .

// My Answer
function maxProduct(arr, size){
    let sortedArr = arr.sort((a, b) => b - a);
    let sum = [];

    for(let i = 0; i < size; i++){
        sum.push(sortedArr[i])
    }

    return sum.reduce((acc, curr) => acc * curr);
}

// Best Practice
function maxProduct(arr, size) {
    // Uses slice(0, size) instead of having to use a FOR Loop like I did above
    return arr.sort((a, b) => b - a).slice(0, size).reduce((acc, curr) => acc * curr);
}

console.log(maxProduct([4,3,5], 2), 20);
console.log(maxProduct([10,8,7,9], 3), 720);
console.log(maxProduct([8,6,4,6], 3), 288);
console.log(maxProduct([10,2,3,8,1,10,4], 5), 9600);
console.log(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5), 247895375);
console.log(maxProduct([-4,-27,-15,-6,-1], 2), 4);
console.log(maxProduct([-17,-8,-102,-309], 2), 136);
console.log(maxProduct([10,3,-27,-1], 3), -30);
console.log(maxProduct([14,29,-28,39,-16,-48], 4), -253344);
console.log(maxProduct([1], 1), 1);