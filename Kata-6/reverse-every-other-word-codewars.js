// https://www.codewars.com/kata/reverse-every-other-word-in-the-string

// Reverse every other word in a given string, then return it. Don't forget to include the spaces!

// My Answer
function reverse(str) {
    // Targets ALL Double Whitespace
    let regex = /\s\s+/g; 
    let split = str.split(' ')
    let oddWord = split.map((el, i) => {
        if(i % 2 === 0) {
            return el
        } else {
           return el.split('').reverse().join('')
        }
    })
    return oddWord.join(' ').toString().replace(regex, '')
}


console.log((reverse("Reverse this string, please!"))) //"Reverse siht string, !esaelp"
console.log((reverse("I really don't like reversing strings!"))) // "I yllaer don't ekil )reversing !sgnirts"