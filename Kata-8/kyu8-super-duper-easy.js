// https://www.codewars.com/kata/super-duper-easy

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// My First Answer
function problem(num) {
    if(typeof num === 'string') {
        return 'Error';
    } else {
        return (num * 50 + 6)
    }
}

// Refactored second answer with Ternary, also happened to be best practice!
const problem = num => typeof num === 'string' ? 'Error' : (num * 50 + 6);

console.log((problem("hello")));
console.log((problem(1)));
console.log((problem(5)));
console.log((problem(0)));
console.log((problem(1.2)));
console.log((problem(3)));
console.log((problem("RyanIsCool")));
console.log((problem(-3)));
console.log((problem("")));
console.log((problem(0.03)));