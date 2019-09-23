// https://www.codewars.com/kata/flattening-lists/train/javascript

// In this Kata you will create a function that takes a list of lists as an input and returns a flattened list.

// Note that if there are more lists inside these lists, they should not be flattened.

// Example:
// flatten([[1,2],[3,4]]) == [1,2,3,4]
// flatten([[1],[2],[3],[4]]) == [1,2,3,4]

// My Answer
function flatten(arr){
    return [].concat(...arr);
}

// Nested For Loop Way
function flatten(arr) {
    let finalArr = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
        finalArr.push(arr[i][j])
        }
    }
    return finalArr;
}

console.log(flatten([[1,2],[3,4]]),[1,2,3,4])
console.log(flatten([[1],[2],[3],[4]]),[1,2,3,4])