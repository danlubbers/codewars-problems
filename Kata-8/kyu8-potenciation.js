// https://www.codewars.com/kata/potenciation/train/javascript

// The function takes in 2 inputs x and y, and should return x to the power of y

// Simple, right? But you're NOT allowed to use Math.pow();

// Obs: x and y will be naturals, so DON'T take fractions into consideration;

// Note : zero to the power of zero equals one in this kata

// My Answer
function power(x,y){
    // Using exponentiation assignment operator **
    return x ** y
}

// Using for loop
function power(x, y) {
    let result = 1;
    for(let i = 0; i < y; i++) {
        result = result * x;
    }
    return result
}


console.log(power(1,701270), 1);
console.log(power(2,2), 4);
console.log(power(3,2), 9);
console.log(power(-1,40), 1);

console.log(power(0, 0), 1);
console.log(power(1441, 0), 1);