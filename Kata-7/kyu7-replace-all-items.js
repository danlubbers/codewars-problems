// https://www.codewars.com/kata/replace-all-items/train/javascript

// Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

// Python / JavaScript: The function has to work for strings and lists.

// Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

// replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

// My Answer
function replaceAll(seq, find, replace) {
  if(seq.length === 0) return [];

  if(typeof seq === 'string') {
    return seq.split('').map(e => e === find ? replace: e).join('');
  }

  return seq.map(e => e === find ? e = replace: e);
}

// Best Practice & Most Clever
function replaceAll(seq, find, replace) {
  return Array.isArray(seq) ? seq.map(e => e === find ? replace : e) : seq.split(find).join(replace)
}

console.log(replaceAll([], 1, 2), []);
console.log(replaceAll([1,2,2], 1, 2), [2,2,2]);
console.log(replaceAll('Hello World', 'o', 0), 'Hell0 W0rld');