// https://www.codewars.com/kata/is-every-value-in-the-array-an-array/train/javascript

// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

// My Answer and Best Practice
const arrCheck = value => value.every(e => Array.isArray(e));

// For In Loop
function arrCheck(val) {

    for(i in val) {
        let e = val[i]

        if(!Array.isArray(e)) return false
    }
    return true
}

console.log(arrCheck([]), true);
console.log(arrCheck([['string']]), true);
console.log(arrCheck([[],{}]), false);
console.log(arrCheck([[1],[2],[3]]), true);
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']), false);