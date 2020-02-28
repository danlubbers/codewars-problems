// https://www.codewars.com/kata/578fe7e2149935740f000525/train/javascript

// Find and return second largest unique number in given Array.

// Array may contain values of any data type. Ignore everything except numbers and strings, which may be converted to numbers.

// If passed value is not an Array or if there is no second largest item in given Array (e.g. [1, 1, 1]) should return undefined.

// Examples
// secondLargest([1, -2, 3]) = 1;
// secondLargest([5, 5, 4]) = 4;
// secondLargest([2, '3', 4]) = 3;
// Should return
// // 1. Passed value not an Array:
// secondLargest("1 2 3") = undefined;

// // 2. There is no second largest:
// secondLargest([2, 2, 2]) = undefined;

// // 3. Ignore everything except:
// //   * numbers
// //   * not-NaN strings:
// secondLargest(['-1', 2, null, false]) = -1;
// Input range
// Numbers are safe Integers.
// Not-NaN strings represent safe Integers.

// My Answer
function secondLargest(array) {
  if(array <= 0 || !Array.isArray(array)) return undefined;
  let filteredNum = [...new Set(array)].filter(e => /\d+$/.test(e)).map(e => e).sort((a, b) => b - a)[1];
  if(array.every((e, i, arr) => e === arr[0])) return undefined
  return +filteredNum;
}

// I like this one
function secondLargest(array) {
  return [...new Set(Array.isArray(array) ? array : [])].filter(e => ['number', 'string'].includes(typeof e) && !isNaN(+e)).map(Number).sort((a, b) => b - a)[1]
}


console.log(secondLargest([-32,11,43,55,0,11]), 43);
console.log(secondLargest(null), undefined);
console.log(secondLargest([5,5,5,5,5,5]), undefined);
console.log(secondLargest([0, 1, '2', 3]), 2);
console.log(secondLargest(['-1', 2, null, false]), -1);
console.log(secondLargest([-5, 8, 8, -6, -8, 6, -4, -5]), 6);


console.log(secondLargest([2, true, 0]), 0);
console.log(secondLargest([0, 1, '2', 3]), 2);
console.log(secondLargest([12, 'four', 2, 3, 1, -33]), 3);

