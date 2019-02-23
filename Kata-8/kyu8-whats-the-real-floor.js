// https://www.codewars.com/kata/whats-the-real-floor

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor ('cause of superstition).

// Write a function that given an American floor (passed as an integer) returns the real floor.
// Moreover, your function should work for basement floors too: just return the same value as the passed one.

// Usage Examples
// getRealFloor(1) == 0 
// getRealFloor(0) == 0 // Special case to please Europeans
// getRealFloor(5) == 4
// getRealFloor(15) == 13
// getRealFloor(-3) == -3

// Using Ternary
function getRealFloor(n) {
    return Math.sign(n) === -1 ? n : n > 13 ? n - 2 : n === -0 ? 0 : n === -1 ? n-1 : n - 1;
}

// Using if/else if statements
// function getRealFloor(n) {
//     if(Math.sign(n) === -1)  return n  
//     else if(n > 13) return n - 2  
//     else if(n === -0) return 0
//     else if(n === -1) return n - 1
//     else return n - 1;
// }

console.log(getRealFloor(1), 0);
console.log(getRealFloor(5), 4);
console.log(getRealFloor(15), 13);
console.log(getRealFloor(-2), -2);
console.log(getRealFloor(-5), -5);
console.log(getRealFloor(-0), 0);