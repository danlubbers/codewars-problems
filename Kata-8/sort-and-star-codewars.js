// https://www.codewars.com/kata/sort-and-star/train/javascript

// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My Answer
function twoSort(arr) {
    let sorted = arr.map(e => e).sort()
    console.log(sorted[0])
    let split = sorted[0].split('')
    return split.map(e => `${e}***`).join('').slice(0, -3)
}

// Best Practice
function twoSort(arr) {
    return arr.sort()[0].split('').join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
