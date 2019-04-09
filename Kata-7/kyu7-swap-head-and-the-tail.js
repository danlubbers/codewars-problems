// https://www.codewars.com/kata/swap-the-head-and-the-tail/train/javascript

// You need to swap the head and the tail of the specified array:

// the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists) leaves on the same position.

// Return new array.

// For example:

//     [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
//      \----/   \----/         
//       head     tail 

//     [ -1, 2 ]  => [ 2, -1 ] 
//     [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  

// My Answer
function swapHeadAndTail(arr) {
    let halved = arr.length / 2;
    return arr.slice(Math.round(halved)|0).concat(halved == (halved|0) ? [] : arr[halved|0], arr.slice(0, halved));
}

// Best Practice
const swapHeadAndTail = (arr, mid = arr.length / 2) => [
    ...arr.slice(-mid),
    ...arr.slice(mid, -mid),
    ...arr.slice(0, mid)
]

// Using For Loop
function swapHeadAndTail(arr) {
    let half = Math.floor(arr.length / 2);

    let newArr = [];

    for(let i = arr.length - half; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    
    if(arr.length % 2 !== 0) newArr.push(arr[half]);

    for(let i = 0; i < half; i++) {
        newArr.push(arr[i])
    }
    return newArr


}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ] ), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);