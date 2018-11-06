// https://www.codewars.com/kata/merge-two-arrays

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

// My Answer
function mergeArrays(arr1, arr2) {
    let merged = [];
    if(arr1.length >= arr2.length){
        for(let i = 0; i < arr1.length; i++) {
           merged.push(arr1[i], arr2[i])
        }      
        return merged.filter(e => e !== undefined) 
    } else if (arr1.length <= arr2.length){
        for(let i = 0; i < arr2.length; i++) {
            merged.push(arr1[i], arr2[i])
         }      
         return merged.filter(e => e !== undefined) 
    } 
}

// Best Practices
function mergeArrays(arr1, arr2) {
    var returnArray = [];
    var counter = 0;
    while (arr1[counter] || arr2[counter] ){
      if(arr1[counter]){
        returnArray.push(arr1[counter]);
      }
      if(arr2[counter]){
        returnArray.push(arr2[counter]);
      }
      counter++;
      
     }
     return returnArray;
  }

console.log((mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']) )) // [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8];