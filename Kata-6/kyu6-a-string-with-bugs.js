// https://www.codewars.com/kata/a-string-with-bugs/train/javascript

// Using only the regular expression you need to check our string for bugs. If there are no bugs, it should return true, and if there are bugs then it should return false.
//  If our string contains a substring 'bug' - test with RegExp should return false. Otherwise true.

// Examples:

// My Answer
let reg = /^((?!bug).)*$/;

// Most Clever
let reg = /^(?!.*bug)/;








console.log(reg.test('good string')                         , true);
console.log(reg.test('string with bug')                     , false);
console.log(reg.test('Can we publish a string with bugs?')  , false);

