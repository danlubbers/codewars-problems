// https://www.codewars.com/kata/turn-the-mars-rover-to-take-pictures/train/javascript

// Mars rover is on an important mission to take pictures of Mars.

// In order to take pictures of all directions it needs an algorithm to help it turn to face the correct position.

// Mars rover can face 4 different directions, that would be N, S, E, W. Every time it needs to turn it will call a command turn passing the current position it is facing and the position it wants to face.

// For example:

// if it asks turn N E the expected result would be right
// if it asks turn N W the expected result would be left
// Mars rover can only make one move at a time and it will only request positions that require a single move.

// Can you write an algorithm that tells if it should move left or right?

// My Answer
function turn(current, target) {
    if(current === 'N' && target === 'E') return 'right';
    if(current === 'N' && target === 'W') return 'left';
    if(current === 'S' && target === 'E') return 'left';
    if(current === 'S' && target === 'W') return 'right';

    if(current === 'E' && target === 'S') return 'right';
    if(current === 'E' && target === 'N') return 'left';
    if(current === 'W' && target === 'S') return 'left';
    if(current === 'W' && target === 'N') return 'right'; 
}

// Most Clever and Best Practice
function turn(current, target) {
    return "NESWN".includes(current+target) ? 'right' : 'left';    
}

// Using an Object
const directions = {
    N: {W: "left", E: "right"},
    S: {W: "right", E: "left"},
    W: {N: "right", S: "left"},
    E: {N: "left", S: "right"},
}

function turn(current, target) {
    return directions[current][target]
}

console.log(turn('N', 'E'), 'right')
console.log(turn('S', 'W'), 'right')
console.log(turn('N', 'W'), 'left')