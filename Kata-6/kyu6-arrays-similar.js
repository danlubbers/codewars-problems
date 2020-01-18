// https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript

// Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

// My Answer & close to Best Practice
function arraysSimilar(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  
  if(arr1.length > arr2.length) {
    return arr1.every((e, i) => e === arr2[i]);
  } else {
    return arr2.every((e, i) => e === arr1[i]);
  }
}

// Second Best
function arraysSimilar(arr1, arr2) {
  return JSON.stringify(arr1.slice().sort()) === JSON.stringify(arr2.slice().sort())
}


var arr1 = [1, 2, 2, 3, 4],
arr2 = [2, 1, 2, 4, 3],
arr3 = [1, 2, 3, 4],
arr4 = [1, 2, 3, "4"]

console.log(arraysSimilar(arr1, arr2)); // Should equal true
console.log(arraysSimilar(arr2, arr3)); // Should equal false
console.log(arraysSimilar(arr3, arr4)); // Should equal false
console.log(arraysSimilar([1, 1, 2], [4, 3, 2, 1, 1])); // Should equal false