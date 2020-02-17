// https://www.codewars.com/kata/5709bdd2f088096786000008/train/javascript

// Write a function that rearranges an integer into its largest possible value.

// superSize(123456) //654321
// superSize(105) // 510
// superSize(12) // 21

// My Answer & basically Best Practice
function superSize(num) {
  return +String(num).split('').sort((a, b) => b - a).join('');
}

console.log(superSize(69),96)
console.log(superSize(513),531)
console.log(superSize(2017),7210)
console.log(superSize(414),441)
console.log(superSize(608719),987610)
console.log(superSize(123456789),987654321)
console.log(superSize(700000000001),710000000000)
console.log(superSize(666666),666666)
console.log(superSize(2),2)