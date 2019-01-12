// https://www.codewars.com/kata/capitals-first

// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

// If a word starts with a number or special character, skip the word and leave it out of the result.

// Input String will not be empty.

// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

// My Answer with for loop
function capitalsFirst(str){
    let regexCap = /^[A-Z]+$/;
    let regexLow = /^[a-z]+$/;
    let split = str.split(' ')
    let newArr = [];  
    
    // Capitol letter
    for(let i = 0; i < split.length; i++) {
        if(split[i][0].match(regexCap) !== null) {
            newArr.push(split[i])
        }
    } 
    
    // Non Capitol letter
    for(let i = 0; i < split.length; i++) {
        if(split[i][0].match(regexLow) !== null) {
            newArr.push(split[i])
        }
    }

    return newArr.join(' ')
}

// Using ES6
function capitalsFirst(str) {
        let regexCap = /^[A-Z]+$/;
        let regexLow = /^[a-z]+$/;
        let split = str.split(' ')
        let newArr = [];   
        
        // Capitol Letter  
        let cap = split.map(e => {
            if(e[0].match(regexCap) !==  null) {
                newArr.push(e)
            } 
        })

        // Non Capitol Letter
        let notCap = split.map(e => {
            if(e[0].match(regexLow) !==  null) {
             newArr.push(e)
            }
            })

        return newArr.join(' ')
    }

// Best Practice
function capitalsFirst(str) {
    let words = str.split(' ');
    let upper = words.filter(e => e.charAt(0).match(/[A-Z]/));
    let lower = words.filter(e => e.charAt(0).match(/[a-z]/));
    return upper.concat(lower).join(' ')
}

console.log(capitalsFirst("hey You, Sort me Already!")) //  "You, Sort Already! hey me"
console.log(capitalsFirst("Life gets Sometimes pretty !Hard")) // , "Life Sometimes gets pretty"
console.log(capitalsFirst("123 baby You and Me")) // , "You Me baby and"