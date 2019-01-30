// https://www.codewars.com/kata/convert-to-binary

// Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

// My Answer and Best Answer
function toBinary(n){
    return +n.toString(2);
}

console.log(toBinary(1), 1);
console.log(toBinary(2), 10);
console.log(toBinary(3), 11);
console.log(toBinary(5), 101);
console.log(toBinary(11), 1011);