// https://www.codewars.com/kata/format-words-into-a-sentence

// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

// formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
// formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
// formatWords([]) // should return ""

// My Answer
function formatWords(words){
    // if there is an empty array return an empty string
    if (!words) return '';
    // filter out any string in the array that is not empty and rewrite over the 'words' variable
    words = words.filter(e => e !== '');
    // slice(0, -2) is the same thing as slice(0, words.length-2), then join(', ') to turn into a string and add comma
    // + is to concatonate if the array length is greater than two, add a (', '), if it is not, add nothing
    // + to concatonate again and slice(-2) goes back two steps and join adds (' and ') between the last and second to last words.
    return words.slice(0, -2).join(', ') + (words.length > 2 ? ', ' : '') + words.slice(-2).join(' and ');
}

// Best Practice
function formatWords(words) {
    if (!words) return "";
    return words.filter(e => e !== '').join(', ').replace(/(,)+(\S+)$/, ' and $2');
}


console.log(formatWords(['ninja', 'samurai', 'ronin'])) // should return "ninja, samurai and ronin"
console.log(formatWords(['ninja', '', 'ronin'])) // should return "ninja and ronin"
console.log(formatWords([])) // should return ""
console.log(formatWords(['wu-tang', 'ninja', '', 'samurai', 'ronin']))



