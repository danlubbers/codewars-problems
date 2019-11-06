// https://www.codewars.com/kata/basic-math-add-or-subtract/train/javascript

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

// My Answer
function calculate(str) {
  let plusRegex = /plus/gi;
  let minusRegex = /minus/gi;

  let addOperators = str.replace(plusRegex, '+').replace(minusRegex, '-');
  console.log(addOperators);
  
  return String(eval(addOperators)); 
}

// Best Practice
function calculate(str) {
  let numbers = str.split(/plus|minus/);
  console.log(numbers);
  let operations = str.match(/[a-z]+/g);
  console.log(operations);
  let sum = parseInt(numbers[0]);

  for(let i = 0; i < operations.length; i++) {
    switch(operations[i]) {
      case "plus":
        sum += parseInt(numbers[i+1]);
        break;
      case "minus":
        sum -= parseInt(numbers[i+1]);
        break;
    }
  }
  return sum + ''; 
}

console.log(calculate("1plus2plus3plus4"), '10');
console.log(calculate('1minus2minus3minus4'), '-8');
console.log(calculate('1plus2plus3minus4'), '2');