// https://www.codewars.com/kata/build-a-square

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

// Example: Integer = 3; I expect a 3x3 square back just like below as a string.

// Solution:

// +++
// +++
// +++

// My Answer
function generateShape(int){
    let result = ''

    // Using nested for loop so we don't add the \n on the last row
    for(let i = 1; i <= int; i++) {
        // loops through to add '+' how many int times
        for(let j = 1; j <= int; j++) {
            result += '+';
        }
        // if i does not equal the last integer, adds \n
        if(i !== int - 1) {
            result += '\n'
        }
    }
    return result
}

// Best Practice
function generateShape(int) {
    return ('+'.repeat(int)+'\n').repeat(int).trim();
}

// Without using a nested For Loop but still using a For Loop
function generateShape(int) {
    let result = '';

    for(let i = 0; i < int; i++) {
        result += '+'.repeat(int)

        if(i < int - 1) {
            result += '\n'
        }
    }
    return result;
}

console.log( generateShape(8) , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )