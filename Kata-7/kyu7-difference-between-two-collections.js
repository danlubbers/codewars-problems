// https://www.codewars.com/kata/difference-between-two-collections/train/javascript

// Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted set with difference.

// The collections can contain any character and can contain duplicates.

// For instance:

// A = [a,a,t,e,f,i,j]

// B = [t,g,g,i,k,f]

// difference = [a,e,g,j,k]

// My Answer
function diff(a, b){
    let sort1 = a.filter(e => !b.includes(e))
    let sort2 = b.filter(e => !a.includes(e))
    
    return [...new Set(sort1.concat(sort2))].sort()
 }

//  Best Practice
function diff(a, b) {
    return [...new Set(a.concat(b).filter(e => a.includes(e) ^ b.includes(e)))].sort();
}

// Using For loops
function diff(a, b) {
    let finalArr = [];
    
    for(let i = 0; i < a.length; i++) {
        if(b.indexOf(a[i]) == -1 && finalArr.indexOf(a[i]) == -1) {
            finalArr.push(a[i])
        }
    }
    
    for(let i = 0; i < b.length; i++) {
        if(a.indexOf(b[i]) == -1 && finalArr.indexOf(b[i]) == -1) {
            finalArr.push(b[i])
        }
    }
    
    return finalArr.sort()
}


console.log(diff(["a","b"], ["a","b"]), []);

    a = ["a","b"];
    b = [];
console.log(diff(a, b), a);

    a = [];
    b = ["a","b"];
console.log(diff(a, b), b);

console.log(diff([], []), []);

    a = ["a","b","z"];
    b = ["a","b"];
console.log(diff(a, b), ["z"]);

    a = ["a","b","z","d","e","d"];
    b = ["a","b", "j","j"];
console.log(diff(a, b), ["d","e","j","z"]);