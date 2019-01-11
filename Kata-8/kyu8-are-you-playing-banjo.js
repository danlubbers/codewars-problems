// https://www.codewars.com/kata/are-you-playing-banjo

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// My Answer
function areYouPlayingBanjo(name) {
    let split = name.split('')
    return split[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
    
}

// Best Practice
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() === 'r' ? ' plays' : ' does not play') + ' banjo'; 
}

console.log(areYouPlayingBanjo("Martin"), "Martin does not play banjo");
console.log(areYouPlayingBanjo("Rikke"),  "Rikke plays banjo");