// https://www.codewars.com/kata/they-say-that-only-the-name-is-long-enough-to-attract-attention-they-also-said-that-only-a-simple-kata-will-have-someone-to-solve-it-this-is-a-sadly-story-number-1-are-they-opposite

// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string

// #Some examples:
// isOpposite("ab","AB") should return true;
// isOpposite("aB","Ab") should return true;
// isOpposite("aBcd","AbCD") should return true;
// isOpposite("AB","Ab") should return false;
// isOpposite("","") should return false;

// My Answer & Best Practice
function isOpposite(s1,s2){
    console.log(s1.toLowerCase())
    console.log(s2.toLowerCase())
    if (s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false 

    for(let i = 0; i < s1.length; i++) {
        console.log(s1.charAt(i))
        console.log(s2.charAt(i))
        if(s1.charAt(i) === s2.charAt(i)) return false
    }
    return true
}

// Clever using map
function isOpposite(s1, s2) {
    return s1.split('').map(e => e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('') === s2 && s1 !== '';
}

// Using For Loop with Array
function isOpposite(s1, s2) {
    let split1 = s1.split('');
    let split2 = s2.split('');

    let valid = false;

    for(let i = 0; i < split1.length; i++) {
        if((split1.length && split2.length) && (split1.length === split2.length) 
        && (split1[i] !== split2[i]) && (split1[i].toLowerCase() === split2[i].toLowerCase())) {
            valid = true;
        } else {
            return valid = false;
        }
    }
    return valid
}

console.log(isOpposite("ab","AB") , true);
console.log(isOpposite("aB","Ab") , true);
console.log(isOpposite("aBcd","AbCD") , true);
console.log(isOpposite("aBcde","AbCD") , false);
console.log(isOpposite("AB","Ab") , false);
console.log(isOpposite("","") , false);
console.log(isOpposite("qTBGaZ","QTBgaZ") , false);
console.log(isOpposite("UeCg","rNWK") , false);