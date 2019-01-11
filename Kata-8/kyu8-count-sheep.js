// https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep

// Task:
// Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

// Note:
// You will always receive a positive integer.

var countSheep = function (num) {
    let string = ''
    for(let i = 1; i <= num; i++) {
        string += `${i} sheep...`
    }
    return string
}

console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");