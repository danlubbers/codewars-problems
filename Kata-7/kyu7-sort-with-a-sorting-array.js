// https://www.codewars.com/kata/sort-with-a-sorting-array/train/javascript

// Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

// initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

// sort(initialArray, sortingArray) => ['z', 'x', 'y']

// sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

// My Answer
function sort(initialArray, sortingArray) {
    let finalArr = [];
    for(let i = 0; i < initialArray.length; i++) {
        finalArr[sortingArray[i]] = initialArray[i]
    }
    return finalArr;
}

// Can use forEach instead of For Loop
function sort(initialArray, sortingArray) {
    let arr = [];
    initialArray.forEach((e, i) => arr[sortingArray[i]] = e)
    return arr;
}

// Most Clever
const sort = (initialArr, sortingArr) => [...Array(initialArr.length)].map((_, k) => initialArr[sortingArr.indexOf(k)]) 
  

console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]), [1, 3, 2, 5, 4]);