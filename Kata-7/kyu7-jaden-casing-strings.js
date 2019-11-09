// https://www.codewars.com/kata/jaden-casing-strings/train/javascript

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// My Answer
String.prototype.toJadenCase = function () {
  let splitStr = this.split(' ');
  let arr = [];

  for(let word of splitStr) {
    arr.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
    
  }
  return arr.join(' ');
};

// Best Practice
String.prototype.toJadenCase = function () {
  return this.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ');
}

// Using Regex with a function in replace
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, (e) => e.toUpperCase());
}

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
