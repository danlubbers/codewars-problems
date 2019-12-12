// https://www.codewars.com/kata/holiday-ii-plane-seating/train/javascript

// Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

// To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

// the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

// Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

// Given a seat number, your task is to return the seat location in the following format:

// '2B' would return 'Front-Left'.

// If the number is over 60, or the letter is not valid, return 'No Seat!!'.

// My Answer
function planeSeat(str){
  let num = +str.replace(/[a-z]/gi, '');
  let letter = str.replace(/[0-9]/gi, '').toLowerCase();

  if(num > 60 || letter === 'i' || letter === 'j') {
    return 'No Seat!!';
  }

  if(num >= 1 && num <= 20) {
    if(/[a-c]/gi.test(letter)) {
      return 'Front-Left';
    } else if(/[d-f]/gi.test(letter)) {
      return 'Front-Middle';
    } else {
      return 'Front-Right';
    }
  } else if(num >= 21 && num <= 40) {
    if(/[a-c]/gi.test(letter)) {
      return 'Middle-Left';
    } else if(/[d-f]/gi.test(letter)) {
      return 'Middle-Middle';
    } else {
      return 'Middle-Right';
    }
    
  } else if(num >= 41 && num <= 60) {
    if(/[a-c]/gi.test(letter)) {
      return 'Back-Left';
    } else if(/[d-f]/gi.test(letter)) {
      return 'Back-Middle';
    } else {
      return 'Back-Right';
    }
  }
}

// Best Practice
function planeSeat(a) {
  const number = parseInt(a);
  const letter = a[a.length - 1];
  if(number > 60 || letter == 'I' || letter == 'J') return 'No Seat!!';
  return `${number > 20 ? number > 40 ? 'Back-' : 'Middle-' : 'Front-'}${letter > 'C' ? letter > 'F' ? 'Right' : 'Middle' : 'Left'}`;
}


console.log(planeSeat('2B'), 'Front-Left');
console.log(planeSeat('20B'), 'Front-Left');
console.log(planeSeat('58I'), 'No Seat!!');

console.log(planeSeat('43D'), 'Back-Middle');
console.log(planeSeat('4k'), 'Front-Right');
console.log(planeSeat('61D'), 'No Seat!!');

console.log(planeSeat('60D'), 'Back-Middle');
console.log(planeSeat('59A'), 'Back-Left');
