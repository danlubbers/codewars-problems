// https://www.codewars.com/kata/reverse-every-other-word-in-the-string

// Reverse every other word in a given string, then return it. Don't forget to include the spaces!

// My Answer
function reverse(str) {
    // Targets ALL Double Whitespace
    let regex = /\s\s+/g; 
    let split = str.split(' ')

    return split.map((e, i) => {
        if(i % 2 === 0) {
            return e
        } else {
           return e.split('').reverse().join('')
        }
    }).join(' ').replace(regex, '')
    
}

// Best Practice
// Used Trim() instead of regex to get rid of trailing white spaces
// const reverse = str => str.trim().split(' ').map((e, i) => i % 2 ===0 ? e : e.split('').reverse().join('')).join(' ');


// console.log((reverse("Reverse this string, please!"))) //"Reverse siht string, !esaelp"
console.log((reverse("I really don't like reversing strings!"))) // "I yllaer don't ekil )reversing !sgnirts"
// console.log(reverse(''))