// https://www.codewars.com/kata/switch-slash-case-bug-fixing-number-6

// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

// My Answer
function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': 
        return result = value.a + value.b;
      case'-': 
        return result = value.a - value.b;
      case'/': 
        return result = value.a / value.b;
      case'*': 
        return result = value.a * value.b;
      case'%': 
        return result = value.a % value.b;
      case'^': 
        return result = Math.pow(value.a, value.b);
    }
    return result;
}

console.log(evalObject({a:1,b:1,operation:'+'}), 2, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'-'}), 0, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'/'}), 1, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'*'}), 1, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'%'}), 0, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'^'}), 1, 'Return the evaluated string as a number!');