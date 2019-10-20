// https://www.codewars.com/kata/find-the-golden-ticket/train/javascript

// Willy Wonka has put golden tickets into the candy bars around the world! Do you have one of those lucky golden tickets?

// Create a function that will search a box of candy bars for the golden ticket. The box is a 2D array that contains false if there is no ticket, and a true if there is one.

// //Example of a box of candy bars:
// [[false],[false],[false],[true],[false]]
// The function should output the index of the candy bar with the golden ticket. IF there is NO golden ticket in the box, the function should output "There is no golden ticket!"

// Examples:

// finder([[false],[false],[false],[true],[false]]) // => 3
// finder([[true],[false],[false],[false]]) // => 0
// finder([[false],[false],[false],[false],[false]]) // => "There is no golden ticket!"

// My Answer
function finder(box) {
    // [].concat(...box) turns the 2d array into a 1d array 
    // Then map over it to find the indexof where it matches true then turn into a string
    let boxIndex = [[].concat(...box)].map(e => e.indexOf(true)).join()
    // +turns the string 'number' back into an integer and if it equals -1 then "There is" and if it doesn't return integer
    return +boxIndex === -1 ? 'There is no golden ticket!': +boxIndex;
}

// Best Practice
function finder(box) {
    for (let i = 0;  i < box.length; i++) {
        // [0] accesses the first layer of the nested 2D array
        if(box[i][0] === true) return i;
    }
    return 'There is no golden ticket!';
}

console.log(finder([[false],[false],[false],[true],[false]]),3);
// console.log(finder([[true],[false],[false],[false]]), 0);
// console.log(finder([[false],[false],[false],[false],[false]]), "There is no golden ticket!");