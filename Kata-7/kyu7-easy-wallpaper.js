// https://www.codewars.com/kata/easy-wallpaper/train/javascript

// John wants to decorate a room with wallpaper. He has been said that making sure he has the right amount of wallpaper is more complex than it sounds. He wants a fool-proof method to getting it right.

// John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

// Last time he did these calculations he caught a headache so could you help John? Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.

// #Example: wallpaper(4, 3.5, 3) should return "ten"

// #Notes:

// all rolls (even with incomplete width) are put edge to edge
// 0 <= l, w, h (floating numbers), it can happens that w x h x l is zero
// the integer r (number of rolls) will always be less or equal to 20

// My Answer
// function wallpaper(l, w, h) {
//     let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
//     let rollWidthInMeters = 52 * .01;
//     let rollLength = 10;

//     return l*w*h === 0 ? 'zero' : numbers[Math.ceil(2*h*(l+w)/rollWidthInMeters/rollLength * 1.15)];
// }

// Best Practice
function toWord(n) {
    let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    return words[n];
}

function wallpaper(l, w, h) {
    if ([l, w, h].indexOf(0) >= 0) {
        return 'zero' 
    } else {
        let roll = 5.2;
        let percentage = 1.15;
        let need = (l*h) * 2 + (w*h) * 2;
        return toWord(Math.ceil(need/roll * percentage));
    }

}

console.log(wallpaper(4, 3.5, 3), "ten")
console.log(wallpaper(6.3, 4.5, 3.29), "sixteen");
console.log(wallpaper(7.8, 2.9, 3.29), "sixteen");
console.log(wallpaper(6.3, 5.8, 3.13), "seventeen");
console.log(wallpaper(6.1, 6.7, 2.81), "sixteen");