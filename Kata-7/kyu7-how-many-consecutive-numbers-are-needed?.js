// https://www.codewars.com/kata/559cc2d2b802a5c94700000c/train/javascript

// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

// My Answer
function consecutive(arr) {
  if(arr.length <= 1) return 0;

  let sorted = arr.sort((a, b) => a - b);
  
  let consecutiveArr = [];

  for(let i = sorted[0]; i <= sorted[sorted.length - 1]; i++) {
    consecutiveArr.push(i)
  }

  return consecutiveArr.filter(e => !sorted.includes(e)).length  
}

// Clever
function consecutive(arr) {
  let length = arr.length;
  return length ? Math.max(...arr) - Math.min(...arr) - length + 1 : 0;
}

// Using for loop diffently than I did
function consecutive(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let count = 0;

  for(let i = 0; i < sorted.length; i++) {
    let diff = sorted[i + 1] - sorted[i];
    diff
    if(diff > 1) count++
  } 
  
  return count;
}

console.log(consecutive([4,8,6]),2);
console.log(consecutive([1,2,3,4]),0);
console.log(consecutive([]),0);
console.log(consecutive([1]),0);