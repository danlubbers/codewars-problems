// https://www.codewars.com/kata/57475353facb0e7431000651/train/javascript

// Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:

// hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
// hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
// hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
// hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5]

// My Answer
function hotSingles(arr1, arr2) {
  let firstFilter = arr1.filter(e => !arr2.includes(e));
  let secondFilter = arr2.filter(e => !arr1.includes(e));
  let combined = [...firstFilter, ...secondFilter];

  return combined.filter((e, i) => combined.indexOf(e) === i);
}

// Best Practice
function hotSingles(arr1, arr2) {
  return [new Set([...arr1, ...arr2])].filter(e => !arr1.includes(e) || !arr2.includes(e))
}

// little bit different
function hotSingles(arr1, arr2) {
  let firstFilter = arr1.filter(e => !arr2.includes(e));
  let secondFilter = arr2.filter(e => !arr1.includes(e));
  return [new Set([...firstFilter, ...secondFilter])];
}

console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]), [4,5])
console.log(hotSingles(["tartar", "blanket", "domino"], ["blanket"]),["tartar", "domino"])
console.log(hotSingles([77, "basketweave"], [78, 42, "basketweave"]), [77, 78, 42])
console.log(hotSingles([100, 45, "ciao"], [100, 2, 3, 45, 5]), ["ciao", 2, 3, 5])
console.log(hotSingles([10, 200, 30], [10, 20, 3, 4, 5, 200]), [30, 20, 3, 4, 5])
