// https://www.codewars.com/kata/color-ghost/train/javascript

// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// My Answer 
class Ghost {
    constructor() {
      this.colors = ['white', 'yellow', 'purple', 'red']
    }
  
    get color() {
      const randomPosition = Math.floor(Math.random() * this.colors.length)
      return this.colors[randomPosition]
    }
}

// Best Practice
let Ghost = function() {
    this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)];
}


ghost = new Ghost();
console.log(ghost.color) //=> "white" or "yellow" or "purple" or "red"