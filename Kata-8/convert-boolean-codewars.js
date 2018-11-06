// https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// My Answer
function boolToWord( bool ){
    if ( bool === true ) {
        return 'Yes'
    } else {
        return 'No'
    }
  }

// Best Practices
function boolToWord( bool ) {
    return bool ? 'Yes' : 'No';
}

console.log((boolToWord(true), 'Yes'))
console.log((boolToWord(false), 'No'))