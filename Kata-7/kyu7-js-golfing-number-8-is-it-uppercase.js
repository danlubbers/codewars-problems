// https://www.codewars.com/kata/js-golfing-number-8-is-it-uppercase

// Check if the input ( one letter ) is Uppercase with no more than 9 characters.

// No need to check for invalid input. Only letters will be tested. Return true if Uppercase and false if Lowercase.

// My Answer passes 106 but fails 1 on restriction of codelength of 9
f=s=>/[A-Z]/.test(s);

// Finally found the answer using less than 9 characters
f=s=>s<{}

// Another way 
f=_=>_<f


console.log(f("A"), true);
console.log(f("b"), false);
console.log(f("C"), true);