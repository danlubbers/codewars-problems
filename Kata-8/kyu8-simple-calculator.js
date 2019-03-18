// https://www.codewars.com/kata/simple-calculator/train/javascript

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument will be numbers.
// The third argument will represent a sign indicating the operation to perform on these two numbers.

// Example:
// calculator(1,2,"+"); //=> result will be 3
// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"

// My Answer
function calculator(a,b,sign){
    let regex = /\D/;
    let operatorsRegex = /[\/\+\-\*]/g;

    if(regex.test(a) || regex.test(b)) return 'unknown value';

    if(sign !== '+' && sign !== '-' && sign !== '*' && sign !== '/') return 'unknown value';

    if(sign === '+') return a + b;
    if(sign === '-') return a - b;
    if(sign === '*') return a * b;
    if(sign === '/') return a / b;
}

// Best Practice
function calculate(a, b, sign) {
    if ((typeof a === 'number') && (typeof b === 'number')) {
        switch(sign) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
        }
    }
    return 'unknown value';
}

// Most Clever
function calculate(a, b, sign) {
    // https://www.w3schools.com/js/js_errors.asp
    // The 'try' statement lets you test a block of code for errors
    try
    // https://www.w3schools.com/jsref/jsref_eval.asp
    // The eval() function evaluates or executes and argument
        { return eval(a+sign+b); }
    // The 'catch' statement lets you handle the errors
    catch(e)
        { return 'unknown value'; }
}

console.log(calculator(1,2,"+"), 3, "calculate");
console.log(calculator(1,2,"-"), -1, "calculate");
console.log(calculator(3,5,"*"), 15, "calculate");
console.log(calculator(6,2,"/"), 3, "calculate");
console.log(calculator(6,2,"$"), "unknown value", "calculate"); 
console.log(calculator(6,"h","*"), "unknown value", "calculate");   
     
