// https://www.codewars.com/kata/squash-the-bugs

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

function findLongest(str) {
  
    var split = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < split.length; i++) {
        if (split[i].length > longest) {
            longest = split[i].length
        }
    }
    return longest
    }
    
console.log(findLongest("The quick white fox jumped around the massive dog"), 7);
console.log(findLongest("Take me to tinseltown with you"), 10); 
console.log(findLongest("Sausage chops"), 7); 
console.log(findLongest("Wind your body and wiggle your belly"), 6); 
console.log(findLongest("Lets all go on holiday"), 7); 