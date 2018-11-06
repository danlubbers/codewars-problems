// https://www.codewars.com/kata/reverse-every-other-word-in-the-string

// Reverse every other word in a given string, then return it. Don't forget to include the spaces!

// function reverse(str){
//     let split = str.split(' ')
//     split
//     let oddWord = split.map((e, i) => {
//         if(i % 2 === 1) {
//             return e
//         }})

//     let filtered = oddWord.filter(e => e !== undefined)
//     console.log(filtered)
//     let filteredSplit = filtered.split('')
//     for(let i = 0; i < filtered.length; i++) {
//         let emptyArr = []
//         console.log(filtered[i])
//         emptyArr.push(filtered[i])
//         emptyArr.join()
//         emptyArr.reverse()
//         emptyArr
//     }   
// }

// My Answer - Passes 43 but fails 1
// Expected: '  ', instead got: ', '
function reverse(str) {
    // Targets ALL commas
    let regex = /,/g;
    // Targets ALL Double Whitespace
    let regex1 = /\s\s+/g; 
    let split = str.split(' ')
    let oddWord = split.map((el, i) => {
        if(i % 2 === 0) {
            return el
        } else {
           return el.split('').reverse().join('')
        }
    })
    let reversedStr = oddWord.toString()
    // Gets rid of ALL commas and creates a single whitespace
    let noCommas = reversedStr.replace(regex, ' ')
    // Gets rid of ALL Double Whitespace and replaces with a ','
    return noCommas.replace(regex1, ', ')
}


console.log((reverse("Reverse this string, please!"))) //"Reverse siht string, !esaelp"
// console.log((reverse("I really don't like reversing strings!"),"I yllaer don't ekil )reversing !sgnirts"))