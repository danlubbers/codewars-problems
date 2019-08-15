// https://www.codewars.com/kata/count-the-number-of-cubes-with-paint-on/train/javascript

// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// The number of times that the cube is cut in each dimension --> the argument 'cuts'.

// To solve the puzzle you must create a function that returns an integer representing the total number of small cubes with at least one red side.

// Examples:
// countSquares(2) --> 26
// countSquares(4) --> 98

// My Answer
function countSquares(cuts) {
    return cuts < 1 ? 1 : (6 * cuts * cuts) + 2;
}

// Best Practice
/**
 * Given a cube painted in red and sliced `N` times in the XYZ axis, this function (that should be named countCubes instead of countSquares) counts the number
 * of small cubes with at least one red face.
 *
 * This function avoids the use of `pow` on purpose. See references for more info. 
 *
 * Special thanks to the people in math.exchange, they were kind and awesome.
 *
 * @param    {number}    cuts    The number of 3D cuts done to the painted cube.
 * @returns  {number}    The number of cubes with at least one red face.
 * @see      {@link http://math.stackexchange.com/questions/1874787/puzzle-find-number-of-cubes-with-1-red-face} for the mathematical algorithm behind the scenes. 
 * @see      {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions} for information about Arrow functions in ECMA6
 * @see      {@link http://stackoverflow.com/questions/18382967/is-math-pow-more-expensive-than-multiplication-using-temporary-assignments} Comparison of multiply VS `pow`
 */
const countSquares = cuts => cuts === 0 ? 1 : (6 * cuts * cuts) + 2;

console.log(countSquares(2),26)
console.log(countSquares(4),98)
console.log(countSquares(5),152)
console.log(countSquares(16),1538)
console.log(countSquares(23),3176)