// https://www.codewars.com/kata/598d91785d4ce3ec4f000018/javascript

// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.


// My Answer
function wordValue(arr) {
  const alphaNums = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  return arr.map(e => e.split('')
      .map(j => alphaNums.indexOf(j) + 1)
      .reduce((acc, curr) => acc + curr, 0))
      .map((e, i) => e * ( i + 1 ))
}


// Best Practice

function wordValue(a) {
  return a.map((s,i) => s.replace(/\s/g, '')
                         .split('')
                         .map(b => (b.charCodeAt()-96))
                         .reduce((acc, cur) => (acc+=cur),0)*(i+1));
}

console.log( wordValue(["codewars","abc","xyz"]), [88,12,225] );
console.log( wordValue(["abc abc","abc abc","abc","abc"]), [12,24,18,24] );
console.log( wordValue([""]), );
