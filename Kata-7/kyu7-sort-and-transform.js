// https://www.codewars.com/kata/sort-and-transform/train/javascript

// Given an array of numbers, return a string made up of four parts:

// a) a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

// b) the same as above, post sorting the array into ascending order,

// c) the same as above, post sorting the array into descending order,

// d) the same as above, post converting the array into ASCII characters and sorting alphabetically.

// The four parts should form a single string, each part separated by a hyphen: '-'

// example format of solution: 'asdf-tyui-ujng-wedg'

// My Answer
function sortTransform(a){
    function conversion(arr) {
        return String.fromCharCode(...arr.slice(0, 2).concat(arr.slice(-2)))
    }
    let merged = conversion(a);
    let sortAscending = conversion(a.sort((a, b) => a - b));
    let sortDescending = conversion(a.sort((a, b) => b - a));

    return `${merged}-${sortAscending}-${sortDescending}-${sortAscending}`;
}

// Best Practice
function setTransform(a) {
    let first = transform(a);
    let second = transform(a.sort((a,b) => a - b));
    let third = transform(a.sort((a,b) => b - a));
    return `${first}-${second}-${third}-${second}`;
}

const transform = (arr) => [...arr.slice(0, 2), ...arr.slice(arr.length, -2)].map(e => String.fromCharCode(e)).join('')


console.log(sortTransform([121, 122, 123, 124, 125, 120, 122, 132]), 'yzz-xy}-}yx-xy}');
console.log(sortTransform([111, 112, 113, 114, 115, 113, 114, 110]), 'oprn-nors-sron-nors');
console.log(sortTransform([51, 62, 73, 84, 95, 100, 99, 126]), '3>c~-3>d~-~d>3-3>d~');
    