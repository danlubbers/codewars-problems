// https://www.codewars.com/kata/alphabet-war

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3 
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3 
//  d - 2
//  z - 1

// My Answer
function alphabetWar(str) {
    let leftArr = []
    let leftTotal = 0;
    let rightArr = []
    let rightTotal = 0;
    let arr = str.split('')

    // This splits the array into two arrays to group them by left and right.
    let splitter = arr.filter(e => {
        if(e === 'w' || e === 'p' ||e === 'b' || e === 's') {
        leftArr.push(e)
    } else {
        rightArr.push(e)
    }})
    
    // This adds the amount of points for each letter to the Left Total
    let leftMapped = leftArr.map(e => {
        if(e === 'w'){
            leftTotal += 4
        } else if(e === 'p') {
            leftTotal += 3
        } else if(e === 'b') {
            leftTotal += 2
        } else if(e === 's') {
            leftTotal += 1
        }
    })

    // This adds the amount of points for each letter to the Right Total
    let rightMapped = rightArr.map(e => {
        if(e === 'm'){
            rightTotal += 4
        } else if(e === 'q') {
            rightTotal += 3
        } else if(e === 'd') {
            rightTotal += 2
        } else if(e === 'z') {
            rightTotal += 1
        }
    })

    // This check to see if the leftTotal is greater, less than or equal to the Right Total
    if(leftTotal > rightTotal) {
        return 'Left side wins!'
    } else if(rightTotal > leftTotal) {
        return 'Right side wins!'
    } else {
        return "Let's fight again!"
    }
} 

// Best Practice
function alphabetWar(str) {
    // destructured
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1};
    let result = str.split('').reduce((acc, curr) => acc + (map[curr] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!"
}

console.log(alphabetWar("z"));        //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs"));    //=> Right side wins!
console.log(alphabetWar("wwwwwwz"));  //=> Left side wins!