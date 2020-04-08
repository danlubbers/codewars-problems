// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// My Answer
function duplicateEncode(word){
  let splitWordLowerCase = word.split('').map(e => e.toLowerCase())
  let objCount = splitWordLowerCase.reduce((acc, curr) => {
    if(!acc[curr]) acc[curr] = 1;
    else acc[curr]++;
    return acc;
  }, {})

  let arrOne = [];
  
  for (let key in objCount) {
    if(objCount[key] === 1) arrOne.push(key)
  }

  return splitWordLowerCase.map((e, i) => arrOne.includes(e) ? '(' : ')').join('')
}

// Best Practice & Most Clever
function duplicateEncode(word) {
  return word.toLowerCase().split('').map((e, i, arr) => {
    return arr.indexOf(e) == arr.lastIndexOf(e)
  })
}

console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");
