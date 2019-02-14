// https://www.codewars.com/kata/sort-arrays-ignoring-case

// Simple sort, but this time sort regardless of upper / lower case.

// So the input of

// [ "Hello", "there", "I'm", "fine"]
// is translated to

// ["fine", "Hello", "I'm", "there" ]

// My Answer
function sortme(names) {
    return names.sort((a, b) => a.localeCompare(b));
}

// Best Practice
function sortme(names) {
    return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

console.log(sortme([ "Hello", "there", "I'm", "fine"])); 
// ["fine", "Hello", "I'm", "there" ]