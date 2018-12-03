// https://www.codewars.com/kata/regular-ball-super-ball

// Regular Ball Super Ball
// Create a class Ball.

// Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

// My Answer
var Ball = function(ballType) {
 if (typeof ballType === 'string') {
     this.ballType = ballType;
    } else {
        this.ballType = 'regular'
    }
};

// Best Practice
var Ball = function(ballType) {
    this.ballType = ballType || 'regular';
}

console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");