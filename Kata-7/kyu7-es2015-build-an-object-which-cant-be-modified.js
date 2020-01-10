// https://www.codewars.com/kata/es2015-build-an-object-which-cant-be-modified/train/javascript

// Declare an variable which name is stone that cant't be modified.

// The initial value of stone is under below.

// {
//   feature: 'earth',
//   style: {
//     color: 'black'
//   }
// }


// My Answer
const stone = {
  feature: 'earth',
  style: {
    color: 'black'
  }
}

Object.freeze(stone);
Object.freeze(stone.style)

// Best Practice
const stone = Object.freeze({
  feature: 'earth', 
  style: Object.freeze({
    color: 'black'
  })
});

stone.style.color = 'orange';

console.log(stone);
