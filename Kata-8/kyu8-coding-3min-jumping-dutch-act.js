// https://www.codewars.com/kata/coding-3min-jumping-dutch-act

// Mr. despair wants to jump off Dutch act, So he came to the top of a building.

// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

// Input: floor, The height of the building (floor)

// Output: a string, The voice of despair(When jumping Dutch act)

// Example:
// sc(2) should return "Aa~ Pa! Aa!"

// It means:

// Mr. despair jumped from the 2 floor, the voice is "Aa~"
// He fell on the ground, the voice is "Pa!"
// He did not die immediately, and the final voice was "Aa!"
// sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

// sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// if floor<=1, Mr. despair is safe, return ""

// My Answer
function sc(floor) {
    if(floor <= 1) return '';
    if(floor <= 6) return `${'Aa~ '.repeat(floor - 1)}Pa! Aa!`;
    if(floor > 6) return `${'Aa~ '.repeat(floor - 1)}Pa!`;
}

// Best Practice
function sc(floor) {
    if(floor <= 1) return '';

    return 'Aa~ '.repeat(floor - 1) + 'Pa!' + (floor <= 6 ? ' Aa!' : '')
}

// using Array
function sc(floor) {
    if(floor < 7 && floor > 1) Array(floor).join('Aa~ ') + "Pa! Aa!";
    if(floor >= 7) Array(floor).join('Aa~ ') + 'Pa!';
    else return '';
}

// Using for loops and pushing to array
function sc(floor){
    if(floor <= 1) return ''

    let arr = [];
    for(let i = 0; i < floor - 1; i++) {
       arr.push('Aa~ ');
    }
    if(floor <= 6) arr.push('Aa!');
    return arr.join(' ')
}

console.log(sc(2), "Aa~ Pa! Aa!", "good luck!");  
console.log(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!"); 
console.log(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
console.log(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
console.log(sc(1), "", "good luck!"); 
console.log(sc(-1), "", "good luck!"); 