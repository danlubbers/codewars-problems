// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// First Attempt - Fails one test
function isSortedAndHow(array) {
  console.log(array)
  let boolMap = array.map((e, i) => {
    return i > 0 ? e > array[i - 1] : true;
  })

  let ascending = boolMap.slice(1).every(e => e === true);
  let descending = boolMap.slice(1).every(e => e !== true);
  console.log(descending)
  return ascending && 'yes, ascending' || descending && 'yes, descending' || 'no';
}

// Second answer - working
function isSortedAndHow(arr) {
  const ascending = [...arr].sort((a, b) => a - b);
  const descending = [...arr].sort((a, b) => b - a);

  return arr.every((e, i) => e === ascending[i])  ? 'yes, ascending'   :
         arr.every((e, i) => e === descending[i]) ? 'yes, descending'  :
         'no'; 
}

// Best Practice
function isSortedAndHow(arr) {
  return arr.every((e, i) => i == 0 || arr[i] >= arr[i - 1]) ? 'yes, ascending' :
         arr.every((e, i) => i == 0 || arr[i] <= arr[i - 1]) ?'yes, descending' :
         'no';
}

console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
console.log(isSortedAndHow([4, 2, 30]), 'no');