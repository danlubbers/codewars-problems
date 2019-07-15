// https://www.codewars.com/kata/converting-integer-to-currency-format/train/javascript

// Write a function that takes an integer in input and outputs a string with currency format.

// Integer in currency format is expressed by a string of number where every three characters are separated by comma.

// For example:

// 123456 --> "123,456"
// Input will always be an positive integer, so don't worry about type checking or negative/float values.

// My Answer and Best Practice
function toCurrency(price){
   return String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// Using reverse for loop
function toCurrency(price) {
    let split = String(price).split('');
    
    for(let i = split.length - 3; i > 0; i -= 3) {
        split.splice(i, 0, ',');
    }
    return split.join('');
}


price1 = 123456;
price2 = 1234;
price3 = 123;
price4 = 123456789012;
console.log(toCurrency(price1), "123,456");
console.log(toCurrency(price2), "1,234");
console.log(toCurrency(price3), "123");
console.log(toCurrency(price4), "123,456,789,012");