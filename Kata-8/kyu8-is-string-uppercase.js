// https://www.codewars.com/kata/is-the-string-uppercase/train/javascript

// Create a method is_uppercase() to see whether the string is ALL CAPS. For example:

// is_uppercase("c") == False
// is_uppercase("C") == True
// is_uppercase("hello I AM DONALD") == False
// is_uppercase("HELLO I AM DONALD") == True
// is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ") == False
// is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") == True
// Corner Cases
// For simplicity, you will not be tested on the ability to handle corner cases (e.g. "%*&#()%&^#" or similar strings containing alphabetical characters at all) - an ALL CAPS (uppercase) string will simply be defined as one containing no lowercase letters. Therefore, according to this definition, strings with no alphabetical characters (like the one above) should return True.

// My Answer
String.prototype.isUpperCase = function() {
   return this == this.toUpperCase()
}


console.log('c'.isUpperCase(), false, 'c is not upper case');
console.log('C'.isUpperCase(), true, 'C is upper case');
console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');