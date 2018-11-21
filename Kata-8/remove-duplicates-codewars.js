// https://www.codewars.com/kata/remove-duplicates-from-list

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// My answer
function distinct(arr) {
    return arr.filter((item, pos) => {
        return arr.indexOf(item) == pos;
    })
}

// Best Practice
function distinct(a) {
    return [...new Set(a)];
}

console.log(distinct([1]), [1]);
console.log(distinct([1,2]), [1,2]);
console.log(distinct([1,1,2]), [1,2]);