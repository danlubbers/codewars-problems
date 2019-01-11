// https://www.codewars.com/kata/shifty-closures

// Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?


var name;
function greet_abe() {
  name = 'Abe';
  return "Hello, " + name + '!';
};


function greet_ben() {
  name = 'Ben'; 
  return "Hello, " + name + '!';
};

console.log("Hello, Abe!", "Hello, Ben!", "This is just an example of how you can write your own TDD tests");