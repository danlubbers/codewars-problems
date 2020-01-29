// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// My Answer & similar to best practice, they used substring instead of slice
function createPhoneNumber(numbers) {
  const areaCode = numbers.slice(0,3).join('');
  const prefix = numbers.slice(3, 6).join('');
  const lineNum = numbers.slice(6).join('');

  return `(${areaCode}) ${prefix}-${lineNum}`
}

// Using For Loop
function createPhoneNumber(numbers) {
  let format = `(xxx) xxx-xxxx`;

  for(let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }

  return format;
}

// Using Regex
function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
