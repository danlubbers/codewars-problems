// https://www.codewars.com/kata/thinkful-logic-drills-traffic-light

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'

// Using Switch
function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow';
            break;
        case 'yellow':
            return 'red';
            break;
        case 'red':
            return 'green';
            break;
        default:
            throw 'Error: wrong input'
            break;
    }
}

// Using If statement
function updateLight(current) {
    if(current === 'green') {
        return 'yellow';
    } else if(current === 'yellow') {
        return 'red';
    } else {        
        return 'green';
    }
}

// Best Practice Using Ternary
const updateLight = current => current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';

console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))