// https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/javascript

// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

// My Answer
function dominator(arr) {
  let objCount = arr.reduce((acc, val) => {
    acc[val] = acc[val] ? ++acc[val]: 1;
    return acc;
  }, {})

  const keys = Object.keys(objCount);
  const values = Object.values(objCount);

  if (Math.max(...values) < arr.length / 2) return -1;
  return values.indexOf(Math.max(...values)) === 0 ? -1 : keys[values.indexOf(Math.max(...values))] * 1;
}

// Best Practice
function dominator(arr) {

  let obj = {};
  let length = arr.length;
  
  for(let i = 0; i < length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
    console.log(obj[arr[i]])
    if(obj[arr[i]] > length / 2) return arr[i]
  }
  return -1;
}

console.log(dominator([3,4,3,2,3,1,3,3]),3);
// console.log(dominator([1,2,3,4,5]),-1);
// console.log(dominator([1,1,1,2,2,2]),-1);
// console.log(dominator([1,1,1,2,2,2,2]),2);


