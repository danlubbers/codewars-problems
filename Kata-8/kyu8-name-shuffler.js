// https://www.codewars.com/kata/name-shuffler

// nameShuffler('john McClane'); => "McClane john"

// My Answer
function nameShuffler(str){
    let split = str.split(' ')
    return `${split[1]} ${split[0]}`;
}

// Best Practice
function nameShuffler(str) {
    return str.split(' ').reverse().join(' ')
}

console.log(nameShuffler('john McClane'),'McClane john');