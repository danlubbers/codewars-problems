// https://www.codewars.com/kata/array-array-array

// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

// My Answer
function explode(arr) {
    let total = 0;
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(+arr[i]) {
            total += arr[i]
        }
    }
    // let mapped = arr.map(e => {
    //     if(+e) {
    //      total += e
    //     } 
    //     console.log(total)
    // })
    if (total === 0) {
        return 'Void!'
    } else {
        for (let i = 0; i < total; i++) {
            newArr.push(arr)
        }
    }
    return newArr
}

// Best Practices
const explode = arr => {
    const n = arr.filter(Number).reduce((acc, curr) => acc + curr, 0);
    return n ? Array(n).fill(arr) : 'Void!';
}



console.log(explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
console.log(explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]] ); 
// console.log(explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]); 
// console.log(explode(['a', 'b']), 'Void!')