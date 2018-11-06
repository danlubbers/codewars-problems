// https://www.codewars.com/kata/counting-sheep-dot-dot-dot

// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// My Answer
function countSheeps(arr) {
     return arr.filter(e => e === true).length
}

// Using For Loop
function countingSheeps(arr) {
    let num = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === true)
            num++;
    }
    return num;
}

// Best Practices
function countSheeps(arr) {
    return arr.filter(Boolean).length;
}



var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

console.log((countSheeps(array1)))
// console.log((countSheeps(array1) == 17, "There are 17 sheeps in total"))