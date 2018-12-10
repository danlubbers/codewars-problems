// https://www.codewars.com/kata/parse-nice-int-from-char-problem/train/javascript

// Ask a small girl - "How old are you?". She always says strange things... Lets help her!

// For correct answer program should return int from 0 to 9.

// Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

// My Answer
function getAge(str){
    return +str.charAt()
}

// Best Practice
function getAge(str) {
    return parseInt(str)
}

console.log(getAge("4 years old"), 4);