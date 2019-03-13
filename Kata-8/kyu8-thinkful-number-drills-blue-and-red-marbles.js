// https://www.codewars.com/kata/thinkful-number-drills-blue-and-red-marbles

// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far, and
// the number of red marbles pulled out so far.
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

// My Answer
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    if(blueStart === redStart) return (blueStart - bluePulled) / (bluePulled + redPulled);
    else return (blueStart - bluePulled) / ((blueStart + redStart) - (bluePulled + redPulled))
}

// Best Practice
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return (blueStart - bluePulled) / ((blueStart - bluePulled) + (redStart - redPulled))
}

// Another way
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
let blueLeft = blueStart - bluePulled;
let redLeft = redStart - redPulled;
let allLeft = blueLeft + redLeft;

return blueLeft/allLeft

}


console.log(guessBlue(5, 5, 2, 3), 0.6);
console.log(guessBlue(5, 7, 4, 3), 0.2);
console.log(guessBlue(12, 18, 4, 6), 0.4);