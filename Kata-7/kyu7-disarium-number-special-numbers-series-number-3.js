// https://www.codewars.com/kata/disarium-number-special-numbers-series-number-3/train/javascript

// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
// Return the result as String
// Input >> Output Examples
// disariumNumber(89) ==> return "Disarium !!"
// Explanation:
// Since , 81 + 92 = 89 , thus output is "Disarium !!"
// disariumNumber(564) ==> return "Not !!"
// Explanation:
// Since , 51 + 62 + 43 = 105 != 546 , thus output is "Not !!"

// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!

// My Answer
function disariumNumber(n){
    let split = n.toString().split('');
    let total = split.map((e, i) => Math.pow(e, i + 1)) 
    let sum = total.reduce((acc, curr) => acc + curr)
    
    return n === sum ? 'Disarium !!' : 'Not !!'
}

// Best Practice
function disariumNumber(n) {
    let number = n.toString();
    let sum = 0;

    for(let i = 0; i < number.length; i++) {
        sum += Math.pow(number[i], i + 1);
    }
    return n === sum ? "Disarium !!" : "Not !!";
}

console.log(disariumNumber(89),"Disarium !!");
console.log(disariumNumber(564),"Not !!");
console.log(disariumNumber(1024),"Not !!");
console.log(disariumNumber(135),"Disarium !!");
console.log(disariumNumber(136586),"Not !!");