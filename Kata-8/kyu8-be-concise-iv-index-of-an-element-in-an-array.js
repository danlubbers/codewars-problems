// https://www.codewars.com/kata/be-concise-iv-index-of-an-element-in-an-array/train/javascript

// Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. You may assume that all array elements are unique.

// function find(array, element) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === element) return i;
//     }
//     return "Not found";
// }

// My Answer
const find = (arr, el) => arr.indexOf(el) !== -1 ? arr.indexOf(el) : 'Not found';

// Most Clever
const find = (arr, el) => (el = arr.indexOf(el)) < 0 ? 'Not found' : el;

var array = [2,3,5,7,11];
console.log(find(array, 5), 2);
console.log(find(array, 11), 4);
console.log(find(array, 3), 1);
console.log(find(array, 2), 0);
console.log(find(array, 7), 3);
console.log(find(array, 1), "Not found");
console.log(find(array, 8), "Not found");
array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
console.log(find(array, "Hello World"), 1);
console.log(find(array, "lorem ipsum"), "Not found");
console.log(find(array, "Lorem Ipsum"), 3);
console.log(find(array, false), 2);
console.log(find(array, true), 0);
console.log(find(array, Math.PI), 5);
console.log(find(array, 3.14), "Not found");
console.log(find(array, 6), 4);