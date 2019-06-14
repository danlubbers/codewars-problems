// https://www.codewars.com/kata/total-amount-of-points

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the array.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// My Answer
function points(games) {
    let total = 0;
    games.map(e => {
        console.log(e[0], e[1], e[2])
        if(e[0] > e[2]) total += 3
        if(e[0] === e[2]) total += 1
    })
    return total;  
}

// Best Practice using Reduce
function points(games) {
    return games.reduce((acc, curr) => {
        return acc += curr[0] > curr[2] ? 3 : curr[0] === curr[2] ? 1 : 0;
    }, 0)
}

// Using For loop
function points(games) {
    let total = 0;
    for(let i = 0; i < games.length; i++) {
        if(games[i][0] > games[i][2]) total += 3
        if(games[i][0] === games[i][2]) total += 1
    }
    return total
}


console.log((points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))); // 30
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])); // 10