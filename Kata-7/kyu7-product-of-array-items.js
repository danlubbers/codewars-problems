// https://www.codewars.com/kata/product-of-array-items/train/javascript

// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.

// My Answer & Best Practice
function product(values) {
  if(values === null || values.length < 1) return null;
  return values.reduce((acc, curr) => acc * curr);
}

console.log(product([5, 4, 1, 3, 9]), 540);
console.log(product([-2, 6, 7, 8]), -672);
console.log(product([10]), 10);
console.log(product([0, 2, 9, 7]), 0);
console.log(product(null), null);
console.log(product([]), null);