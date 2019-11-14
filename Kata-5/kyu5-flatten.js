// https://www.codewars.com/kata/flatten/train/javascript

// For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

// The following are examples of how this function would be used and what the expected results would be:

// flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
// flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

// Flat doesn't work in Codewars
// function flatten(...arr) {
//     return arr.flat(Infinity);
// };

// My Answer
const flatten = (...args) => {
    // console.log(args)
    // console.log(args.filter(Array.isArray).length);
    
    let arr = [];

    for(let i = 0; i < args.length; i++) {
        if(args.filter(Array.isArray).length > 1) {
            arr.push(args[i])
            arr = [].concat(...arr)
        }
    }

    let flat = [].concat(...arr);

    if(flat[0][0] === undefined) {
      return [].concat(...flat)
    } else {
      return flat;
    }
}

// Best Practice
function flatten() {
  return [].slice.call(arguments).reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatten.apply(null, curr) : curr);
  }, []);
}

// Most Clever
const flatten = function(...arr) {
  return arr.toString().split(',');
}

// Reduce one liner
const flatten = (...args) => [...args].reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(...cur) : cur), []);

console.log(flatten(1, [2, 3], 4, 5, [6, [7]])); // returns [1, 2, 3, 4, 5, 6, 7]
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])); // returns ['a', 'b', 2, 3, null, 4, 'c']
console.log(flatten(1, [ 2, 3 ], 4, 5, [ 6, [ 7, [ 8 ] ] ]));

