// https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript

// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

// Must contain letters and numbers.

// My Answer
function validPass(password) {
  if (password.length <= 3 || password.length > 20) return "INVALID";
  return password.match(/^(?:[a-z0-9]+[a-z]+[0-9])[a-z0-9]*$/i) === null
    ? "INVALID"
    : "VALID";
}

// Best Practice
// function validPass(password){
//   return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password) ? 'VALID' : 'INVALID';
// }

console.log(validPass("Username123"), "VALID");
console.log(validPass("Username"), "INVALID");
console.log(validPass("1Username"), "INVALID");
console.log(validPass("123"), "INVALID");
console.log(validPass("a12"), "INVALID");
console.log(validPass("Username123!"), "INVALID");
console.log(validPass("ThisPasswordIsTooLong1234"), "INVALID");

console.log(validPass("61g7l49"), "VALID");
console.log(validPass("71cxj74"), "VALID");
