// https://www.codewars.com/kata/ascii-letters-from-number/train/javascript

// You have to create a function that converts integer given as string into ASCII uppercase letters.

// All ASCII characters have their numerical order in table.

// For example,

// from ASCII table, character of number 65 is "A".
// Numbers will be next to each other, So you have to split given number to two digit long integers.

// For example,

// '658776' to [65, 87, 76] and then turn it into 'AWL'.

// My Answer
function convert(number){
  let twoDigitArray = number.match(/.{1,2}/g)
  return twoDigitArray.map(e => String.fromCharCode(e)).join('')
}

// Most Clever
function convert(number) {
  return String.fromCharCode(...number.match(/../g))
}

// Using for Loop
function convert(number) {
  let decoded = '';

  for(let i = 1; i < number.length; i+=2) {
    decoded += String.fromCharCode(number[i-1] + number[i]);
  }
  return decoded;
}

console.log(convert("65"),"A")
console.log(convert("656667"),"ABC")
console.log(convert("676584"),"CAT")
console.log(convert("73327673756932858080698267658369"),"I LIKE UPPERCASE")
