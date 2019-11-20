// https://www.codewars.com/kata/extract-last-names-of-people-named-michael/train/javascript

// const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

// get an array of last names of people named Michael. The result should be:
// ["Jordan", "Johnson", "Green", "Wood"]

// Notes:

// First name will always be Michael with upper case 'M'.
// There will always be a space character between 'Michael' and last name.
// Last name will always be one word, starting with an upper-case letter and continuing with lower-case letters.
// There will always be at least one 'Micheal' with a valid last name in the input text.

// My Answer
function getMichaelLastName(inputText) {
  const inputTextSplit = inputText.split(' '),
        michaelRegex = /Michael/g,
        upperRegex = /[A-Z]/,
        onlyAlpha = /[^a-zA-Z]/g;
  
  return inputTextSplit.map((e, i, arr) => {
    if(e.match(michaelRegex)) {
      let increment = ++i
      return arr[increment];
    }
  }).map(e => upperRegex.test(e) ? e : null)
    .filter(e => e)
    .map(e => e.replace(onlyAlpha, ''))
};

// Best Practice
function getMichaelLastName(str) {
  // regex is find Michael and uppercase letters and \w (same as [a-zA-Z0-9_]), + is matching the preceding expression 1 or more times and g is global search
  return str.match(/Michael [A-Z]\w+/g).map(e => e.split(' ')[1]);
}

const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

console.log(getMichaelLastName(inputText), ["Jordan","Johnson","Green","Wood"]);