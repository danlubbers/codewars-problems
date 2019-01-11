// https://www.codewars.com/kata/is-he-gonna-survive

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

// My Answer
function hero(bullets, dragons){
    console.log((bullets / 2) >= dragons)
    if((bullets / 2) >= dragons) {
        return true
    } else {
        return false
    }
}

// My Refactor
const hero = (bullets, dragons) => (bullets / 2) >= dragons ? true : false;

// Best Practice
function hero(bullets, dragons){
    return bullets >= dragons * 2
}

console.log((hero(10, 5)));
console.log((hero(7, 4)));
console.log((hero(4, 5)));
console.log((hero(100, 40)));
console.log((hero(1500, 751)));
console.log((hero(0, 1)));