// https://www.codewars.com/kata/enumerable-magic-number-3-does-my-list-include-this

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// My Answer
function include(arr, item){
    return arr.filter(e => e === item).length > 0;
}

// // Best Practice
function include(arr, item) {
    return arr.includes(item);
}

// Using For Loop
function include(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true
        } 
    }
    return false
}

console.log(include([1,2,3,4], 3), true )
console.log(include([1,2,4,5], 3), false)
