// https://www.codewars.com/kata/526ec46d6f5e255e150002d1/train/javascript

// We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

// var callbacks = createFunctions(5); // create an array, containing 5 functions

// callbacks[0](); // must return 0
// callbacks[3](); // must return 3
// We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available

// My Answer
function createFunctions(n) {
  let callbacks = [];

  // Changing var to let in for loop solved it
  for (let i=0; i < n; i++) {
    // I changed function in push to arrow function
    callbacks.push(() => i);
  }
  
  return callbacks;
}

var callbacks = createFunctions(10);

    for (var i=0; i<callbacks.length; i++) {
      console.log(callbacks[i](), i, 'Function with index ' + i);
    }