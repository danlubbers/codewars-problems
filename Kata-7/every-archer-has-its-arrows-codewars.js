// https://www.codewars.com/kata/every-archer-has-its-arrows

// #It's show time! Archers have gathered from all around the world to participate in the Arrow Function Faire. But the faire will only start if there are archers signed and if they all have enough arrows in their quivers - at least 5 is the requirement! Are all the archers ready?

// #Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// #Argument archers is an array of integers, in which each element corresponds to the number of arrows each archer has.

// #Return Your function must return true if the requirements are met or false otherwise.

// #Examples archersReady([1, 2, 3, 4, 5, 6, 7, 8]) returns false because there are archers with not enough arrows.

// archersReady([5, 6, 7, 8]) returns true.

// My Answer
function archersReady(archers){
    // arrow it
    return archers.length > 1 ? archers.every( e => e >= 5) : false;
}

// Best Practice
function archersReady(archers) {
    return archers.length > 0 && archers.every(e => e >= 5);
}

console.log(archersReady([]), false, "Should handle no archers");
console.log(archersReady([1, 2, 3, 4]), false, "Should handle unprepared archers");
console.log(archersReady([5, 6, 7, 8]), true, "Should handle prepared archers");
console.log(archersReady([1, 2, 3, 4, 5, 6, 7, 8]), false, "Should handle mixed archers");