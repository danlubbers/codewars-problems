// https://www.codewars.com/kata/multiply-the-number/train/javascript

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15
// multiply(10)==250
// multiply(200)==25000
// multiply(0)==0
// multiply(-3)==-15

// My Answer
function multiply(num){
    // Gets rid of - in regards to length
    let newNum = Math.abs(num)
    // Gets the length
    let length = newNum.toString().length;

    let total = num;
    for (let i = 1; i <= length; i++) {
        total = total * 5; 
    }
    return total;
}

// Best Practice
function multiply(num) {
    return num * Math.pow(5, Math.abs(num).toString().length);
}

// Different way with For Loop
function multiply(num) {
    let length = num.toString().replace('-', '').length;

    for (let i = 0; i < length; i++) {
        num *= 5;
    }
    return num;
}

console.log(multiply(10),250);
console.log(multiply(5),25);
console.log(multiply(200),25000);
console.log(multiply(0),0);
console.log(multiply(-2),-10);