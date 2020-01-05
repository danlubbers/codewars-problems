// https://www.codewars.com/kata/what-rank-is-this-card/train/javascript

// What is the rank of a playing card? The function takes a string like '2c' or 'Kh' and returns a value based on rank of the card. The first character corresponds to the rank of the card and the second character corresponds to the suit of the card. Cards 2-9 should return the corresponding number. T returns 10, J => 11, Q => 12, K => 13 and A => 14. Otherwise the rank should be returned as 0.

// For example:

// rank('2c') == 2;
// rank('Tc') == 10;
// rank('As') == 14;
// rank('1c') == 0; // There is no card '1'
// Suits can be disregarded.

// My Answer
function rank(card) {
  if(/[2-9]/g.test(card)) {
    return +card.slice(0, 1);

  } else if(/[tjqka]/gi.test(card)) {
    if(/t/gi.test(card)) return 10;
    if(/j/gi.test(card)) return 11;
    if(/q/gi.test(card)) return 12;
    if(/k/gi.test(card)) return 13;
    if(/a/gi.test(card)) return 14;
    
  } else {
    return 0;
  }
}

// Most Clever
function rank(card) {
  return ['','2','3','4','5','6','7','8','9','T','J','Q','K','A'].indexOf(card[0] + 1);
}

console.log(rank("2s"), 2)
console.log(rank("7h"), 7)
console.log(rank("Jc"), 11)
console.log(rank("Ad"), 14)
console.log(rank("1d"), 0)
