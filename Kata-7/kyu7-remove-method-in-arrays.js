// https://www.codewars.com/kata/remove-method-in-arrays/train/javascript

// Some people really wonder why JavaScript arrays don't have a remove function to remove an element.

// Go ahead and make one.

// var someArray = [1, 2, 3];
// someArray.remove(1);
// This should remove the element on index 1 making someArray = [1, 3]

// Note: You need to handle invalid input. ie If index not a number or out of bounds return array unchanged.

// My Answer
Array.prototype.remove = function(index) {
  if(typeof index !== 'number' || /\D/gi.test(index) ) return this;
    
  return this.splice(index, 1);
};


// I like this way
Array.prototype.remove = function(index) {
  return typeof index === 'number' && index > 0 ? this.splice(index, 1) : this;
};

let someArray = [1, 2, 3];
console.log(someArray.remove(1));
console.log(someArray.remove('a'));
console.log(someArray.remove(0));
console.log(someArray.remove(-5));
