// https://www.codewars.com/kata/smallest-value-of-an-array/train/javascript

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

// My Answer, ended up passing after continually failing last test below
function min(arr, toReturn) {
    if(toReturn === 'value') {
        return arr.sort((a, b) => a - b)[0];
    } else {
        let index = 0;
        let value = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if(arr[i] < value) {
                value = arr[i]
                index = i;
            }
        }
        return index
        // One liner way to do the for loop
        // return arr.indexOf(Math.min.apply(null, arr))
    }
}

// Best Practice
function min(arr, toReturn) {
    let val = Math.min.apply(null, arr)
    return toReturn === 'value' ? val : arr.indexOf(val)
}

console.log(min([1,2,3,4,5], 'value'), 1)
console.log(min([1,2,3,4,5], 'index'), 0)

console.log(min([ 500, 250, 750, 5000, 1000, 230 ], 'value'), 230)
console.log(min([ 500, 250, 750, 5000, 1000, 230 ], 'index'), 5)

// I don't know why codewars says the smallest value of this array is index 13???
console.log(min([-366,21,116,120,140,162,175,194,219,223,243,254,347,365,393,402,408,411,440,473,474,477,551,597,602,633,640,651,669,709,740,743,761,781,784,799,805,827,881,885,908,911,928,939,945,949,958,964,965,975 ], 'index'), 13)