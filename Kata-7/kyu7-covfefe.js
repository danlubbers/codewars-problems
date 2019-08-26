// https://www.codewars.com/kata/covfefe/train/javascript

// Your are given a string. You must replace the word(s) coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

// function covfefe(str){
//     let regex = new RegExp('coverage')
//     return str.includes('coverage') ? str.replace((regex, 'g'), 'covfefe') : `${str} covfefe`
// }

// My Answer
function covfefe(str){
    let regex = /coverage/gi;

    if(str.match(regex)) {
        return str.replace(regex, 'covfefe')
    } else {
        return `${str} covfefe`; 
    }
}

// Best Practice
function covfefe(str) {
    const res = str.replace(/coverage/g, 'covfefe')
    return res === str ? str + ' covfefe' : res;
}





console.log(covfefe("coverage"),"covfefe");
console.log(covfefe("coverage coverage"),"covfefe covfefe");
console.log(covfefe("nothing"),"nothing covfefe");
console.log(covfefe("double space "),"double space  covfefe");
console.log(covfefe("covfefe"),"covfefe covfefe");