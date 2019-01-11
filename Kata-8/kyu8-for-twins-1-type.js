// https://www.codewars.com/kata/for-twins-1-types

// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

// Task:
// Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

// Examples:
// typeValidation(42, "number");   // => true
// typeValidation("42", "number"); // => false

// My Answer
function typeValidation(variable, type) {
    return typeof variable === type ? true : false;
}

console.log(typeValidation(42, "number"), true);
console.log(typeValidation("42", "number"), false);