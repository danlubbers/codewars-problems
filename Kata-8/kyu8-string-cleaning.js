// https://www.codewars.com/kata/string-cleaning

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:

// stringClean('! !') == '! !'
// stringClean('123456789') == ''
// stringClean('This looks5 grea8t!') == 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

// My Answer
function stringClean(s){
    return s.replace(/[0-9]/g, '');
}

// Using For Loop
function stringClean(s){
    // Function will return the cleaned string
  var result = '';
  for(var i = 0; i < s.length; i++) {
    if(isNaN(s[i]) || s[i] == ' ') result += s[i]; 
    }
  return result;
}

console.log(stringClean(""), "")
console.log(stringClean("! !"), "! !")
console.log(stringClean("123456789"), "")
console.log(stringClean("(E3at m2e2!!)"), "(Eat me!!)")
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"), "Dsa cdsc csa!!! I Am cool!")
console.log(stringClean("A1 A1! AAA   3J4K5L@!!!"), "A A! AAA   JKL@!!!")