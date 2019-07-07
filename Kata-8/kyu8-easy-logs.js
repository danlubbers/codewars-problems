// https://www.codewars.com/kata/easy-logs/train/javascript

// Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

// My Answer and Best Practice
function logs(x , a, b){
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
    return Math.log(a * b) / Math.log(x)
}

console.log(logs(10, 2, 3), 0.7781512503836435);
console.log(logs(5, 2, 3), 1.1132827525593785);
console.log(logs(1000, 2, 3), 0.25938375012788123);