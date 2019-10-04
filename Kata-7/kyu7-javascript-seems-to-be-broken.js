// https://www.codewars.com/kata/javascript-seems-to-be-broken/train/javascript

// There is some horribly rotten script that is not required in your project anymore, and it is affecting the way your code is supposed to work.

// For some reason you don't have an access to that rotten peice of code but you want to get your code working as expected in any possible way.

// Go and get it working!

// My first answer and codewars does not like it even though it works.
function semicolonSeparationToCommaSeparation(input) {
    let regex = /\;/g;
    return input.replace(regex, ',');  
}

// My second answer and codewars does not like it even thoug it works.
function semicolonSeparationToCommaSeparation(input) {
    let str = '';
    for(let i = 0; i < input.length; i++) {
         str += input[i].replace(';', ',')
    }
    return str;
}

// Passing Answer
function semicolonSeparationToCommaSeparation(input) {
    let str='';
    for (let i=0;i<input.length;i++){
        if (!isNaN(input[i]*1)) str+=input[i]+','
    }
    return str.slice(0,-1)
}

// Best Practice
function semicolonSeparationToCommaSeparation(input) {
    return input.split(";")._join(","); 
}

console.log(semicolonSeparationToCommaSeparation("1;2;3"), "1,2,3");