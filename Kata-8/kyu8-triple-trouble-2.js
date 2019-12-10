// https://www.codewars.com/kata/triple-trouble-2/train/javascript

// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

// My Answer
function tripleTrouble(str1, str2, str3){
  let finalStr = ``;

  for(let i = 0; i < str1.length; i++) {
    finalStr += str1[i];
    finalStr += str2[i];
    finalStr += str3[i];
  }

  return finalStr;
}

// Most Clever
function tripleTrouble(one, two, three) {
  return one.split('').map((e, i) => e + two[i] + three[i]).join('');
}

console.log(tripleTrouble("this","test","lock"), "ttlheoiscstk");
console.log(tripleTrouble("aa","bb","cc"), "abcabc");
console.log(tripleTrouble("Bm", "aa", "tn"), "Batman");
console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");