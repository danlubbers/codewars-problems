// https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript

// Coding in function ```whatNumberIsIt```. function accept 1 parameter:```n```. it's a number.

// To judge the number ```n```. If n is one of the above five constants, return one of these string:

// ```
// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// ```

// Other values should return ```"Input number is xxx"```. xxx means this number.

// For example:
// ```
// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"
// ```
// What you need to think about is how to judge it correctly and effectively and don't forget isNaN().

// My Answer
function whatNumberIsIt(n){
    switch(n){
        case Infinity:
            return 'Input number is Number.POSITIVE_INFINITY';
        case -Infinity:
            return 'Input number is Number.NEGATIVE_INFINITY'; 
        case 1.7976931348623157e+308:
            return 'Input number is Number.MAX_VALUE';
        case 5e-324:
            return 'Input number is Number.MIN_VALUE';
        default:
            if(isNaN(n)) return 'Input number is Number.NaN';
            else return `Input number is ${n}`
    }
}

// Best Practice
function whatNumberIsIt(n){
    switch (true) {
      case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
      case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
      case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
      case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
      case (isNaN(n)): return "Input number is Number.NaN";
      default: return "Input number is " + n;
    }
}

// Using For Loop
function whatNumberIsIt(n) {
    let types = ["Number.MAX_VALUE", "Number.MIN_VALUE",  "Number.NaN", "Number.POSITIVE_INFINITY", "Number.NEGATIVE_INFINITY"];

    for(let i in types) {
        if(isNaN(n)) return 'Input Number is Number.NaN';
        if(eval(types[i]) === n) return 'Input number is ' + types[i]
    }
    return 'Input number is ' + n;
}


console.log(whatNumberIsIt(1/0),"Input number is Number.POSITIVE_INFINITY");
console.log(whatNumberIsIt(100),"Input number is 100");
console.log(whatNumberIsIt(1.7976931348623157e+308),"Input number is Number.MAX_VALUE");
console.log(whatNumberIsIt(5e-324),"Input number is Number.MIN_VALUE");
console.log(whatNumberIsIt(-Number.MAX_VALUE*2),"Input number is Number.NEGATIVE_INFINITY");
console.log(whatNumberIsIt(NaN),"Input number is Number.NaN");
console.log(whatNumberIsIt(Infinity+1),"Input number is Number.POSITIVE_INFINITY");
