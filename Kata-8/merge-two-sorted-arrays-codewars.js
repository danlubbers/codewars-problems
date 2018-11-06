// https://www.codewars.com/kata/merge-two-sorted-arrays-into-one

// You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples
// arr1 = [1, 2, 3, 4, 5];
// arr2 = [6, 7, 8, 9, 10];
// mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr3 = [1, 3, 5, 7, 9];
// arr4 = [10, 8, 6, 4, 2];
// mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr5 = [1, 3, 5, 7, 9, 11, 12];
// arr6 = [1, 2, 3, 4, 5, 10, 12];
// mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

// My Answer
function mergeArrays(arr1, arr2) {
    let merged = arr1.concat(arr2)
    let sorted = merged.sort((a, b) => a - b );
    let filtered = sorted.filter((element, index, arr) => {
        return !index || element !== arr[index -1]
    })
    filtered
}

// ES6
const mergeArrays = (arr1, arr2) => arr1.concat(arr2).sort((a,b) => a - b).filter((element,   index, arr) => { arr.indexOf(element) === index
})

console.log((mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8]));
console.log((mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10]));
console.log((mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12]));