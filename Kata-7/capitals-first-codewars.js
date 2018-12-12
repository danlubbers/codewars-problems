// https://www.codewars.com/kata/capitals-first

// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

// If a word starts with a number or special character, skip the word and leave it out of the result.

// Input String will not be empty.

// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

function capitalsFirst(str){
    let regex = /^[A-Za-z]+$/;
    let split = str.split(' ')
    let newArr = [];  
    
    // Capitol letter
    for(let i = 0; i < split.length; i++) {
        if(split[i][0] === split[i][0].toUpperCase()) {
            newArr.push(split[i])
        }
    } 
    
    // Non Capitol letter
    for(let i = 0; i < split.length; i++) {
        if(split[i][0] !== split[i][0].toUpperCase()) {
            newArr.push(split[i])
        }
    }

    return newArr.join(' ')
}

// function capitalsFirst(str) {
//     console.log(str)
//         let split = str.split(' ')
//         let newArr = [];        
//         let cap = split.map(e => {
//             if(e[0] === e[0].toUpperCase()) {
//                 newArr.push(e)
//             } 
//         })
//         let notCap = split.map(e => {
//             if(e[0] !== e[0].toUpperCase()) {
//              newArr.push(e)
//             }
//             })
//         return newArr.join(' ')
//     }

console.log(capitalsFirst("hey You, Sort me Already!")) //  "You, Sort Already! hey me"
console.log(capitalsFirst("Life gets Sometimes pretty !Hard")) // , "Life Sometimes gets pretty"
console.log(capitalsFirst("123 baby You and Me")) // , "You Me baby and"