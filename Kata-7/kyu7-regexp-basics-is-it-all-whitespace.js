// https://www.codewars.com/kata/regexp-basics-is-it-all-whitespace/train/javascript

// Implement String#whitespace?(str) (Ruby), String.prototype.whitespace(str) (JavaScript), String::whitespace(str) (CoffeeScript), or whitespace(str) (Python), which should return true/True if given object consists exclusively of zero or more whitespace characters, false/False otherwise.

// My Answer
String.prototype.whitespace=function(){
    return /^\s*$/g.test(this)
}

// Most Clever
String.prototype.whitespace=function(){
    return this.trim() === '';
    // or
    return !this.trim();
}

// Using .match and \S
String.prototype.whitespace-function(){
    return this.match(/\S/) === null;
}

// Using .macth with \w
String.prototype.whitespace=function(){
   return !/\w/.test(this);
}


console.log("".whitespace(), true);
console.log(" ".whitespace(), true);
console.log("\n\r\n\r".whitespace(), true);
console.log("a".whitespace(), false);
console.log("w\n".whitespace(), false);
console.log("\t".whitespace(), true);
console.log(" a\n".whitespace(), false);
console.log("\t \n\r\n  ".whitespace(), true);
console.log("\n\r\n\r ".whitespace(), true);
console.log("\n\r\n\r 3".whitespace(), false);