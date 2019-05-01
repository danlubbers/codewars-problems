// https://www.codewars.com/kata/sorting-arrays/train/javascript

// Given two arrays, a1 and a2, sort the elements of a2 based on the first letters of elements in a1.

// Example 1
// var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
// var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
// Example 2
// var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
// var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Each element in the arrays will start with a unique letter and there will only be a single match for each element.

// My Answer
function sortArray(a1, a2) {
    let newArr = [];
    for(let i = 0; i < a1.length; i++) { 
        for(let j = 0; j < a2.length; j++) {
            if(a2[j][0] === a1[i][0]) newArr.push(a2[j])       
        }
    }
    return newArr
}

// Best Practice
const sortArray = (a1, a2) => a1.map(e => a2.find(w => e[0] === w[0]));

// Using Reduce
function sortArray(a1, a2) {
    let index = a1.reduce((a, b, i) => (a[b[0]] = i, a), {});
    // console.log(index)
    return a2.slice().sort((a, b) => index[a[0]] - index[b[0]])
}

var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
console.log(sortArray(a1, a2), ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']);

var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
console.log(sortArray(a1, a2), ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']);

var a1 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
var a2 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
console.log(sortArray(a1, a2), ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']);