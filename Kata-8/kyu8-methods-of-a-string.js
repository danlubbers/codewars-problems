// https://www.codewars.com/kata/training-js-number-18-methods-of-string-object-concat-split-and-its-good-friend-join

// Coding in function splitAndMerge, function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator.

// First we need to divide the sentence into words(Use separator space); and then divide each word into characters(Use separator empty string); and then merge each characters with the specified sp; at last merge all the words(Use separator space) and return it.

// for example:

// splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
// splitAndMerge("My name is John","-") should return "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!",".") should return "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"

function splitAndMerge(str,sp){
    return str.split(' ').map(e => e.split('').join(sp)).join(' ')
}

// console.log(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
console.log(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
console.log(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
console.log(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");