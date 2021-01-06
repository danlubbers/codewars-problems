// https://www.codewars.com/kata/5be8852935da89c5c8000157/train/javascript

// When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

// Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

// Write a function which returns valid rating represented as moons ('o','c','x') in single string.
// You are given the following values preloaded (remember, since I can't use unicode characters, moons in brackets are here just to improve your imagination):

function moonRating(rating) {
  const fiveMoonRating = Math.round(rating);
  switch (fiveMoonRating) {
    case 0:
      return "xxxxx";
    case 1:
      return "cxxxx";
    case 2:
      return "oxxxx";
    case 3:
      return "ocxxx";
    case 4:
      return "ooxxx";
    case 5:
      return "oocxx";
    case 6:
      return "oooxx";
    case 7:
      return "ooocx";
    case 8:
      return "oooox";
    case 9:
      return "ooooc";
    case 10:
      return "ooooo";
  }
}

console.log(moonRating(0)); // 'xxxxx'
console.log(moonRating(5)); // 'oocxx'
console.log(moonRating(6)); // 'oooxx'
console.log(moonRating(10)); // 'ooooo'

console.log(moonRating(1.5)); // 'oxxxx'
console.log(moonRating(3.9)); // 'ooxxx'
console.log(moonRating(7.2)); // 'ooocx'
