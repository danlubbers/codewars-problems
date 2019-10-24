// https://www.codewars.com/kata/colored-hexes/train/javascript

// You're looking through different hex codes, and having trouble telling the difference between #000001 and #100000

// We need a way to tell which is red, and which is blue!

// That's where you create hex_color()!

// It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!

// But, if multiple colors are of equal concentration, you should return their mix!

// red + blue = magenta

// green + red = yellow

// blue + green = cyan

// red + blue + green = white
// One last thing, if the string given is empty, or has all 0's, return black!

// Examples:

// hexColor('087 255 054') == 'green'
// hexColor('181 181 170') == 'yellow'
// hexColor('000 000 000') == 'black'
// hexColor('001 001 001') == 'white'

// My Answer
function hexColor(codes){
   let arrCodes = codes.split(' ').map(e => parseInt(e));

   if(arrCodes.reduce((acc, curr) => acc + curr, 0) === 0 || codes === '') return 'black'
   if(arrCodes[0] === arrCodes[1] && arrCodes[1] === arrCodes[2]) return 'white';
   if(arrCodes[0] > arrCodes[1] && arrCodes[0] > arrCodes[2]) return 'red';
   if(arrCodes[0] < arrCodes[1] && arrCodes[1] > arrCodes[2]) return 'green';
   if(arrCodes[0] < arrCodes[2] && arrCodes[1] < arrCodes[2]) return 'blue';
   if(arrCodes[0] === arrCodes[1]) return 'yellow';
   if(arrCodes[1] === arrCodes[2]) return 'cyan';
   if(arrCodes[0] === arrCodes[2]) return 'magenta';
}

console.log(hexColor(''), 'black')
console.log(hexColor('000 000 000'), 'black')
console.log(hexColor('121 245 255'), 'blue')
console.log(hexColor('35 28 40'), 'blue')
console.log(hexColor('027 100 100'), 'cyan')
console.log(hexColor('021 021 021'), 'white')
console.log(hexColor('255 000 000'), 'red')
console.log(hexColor('000 147 000'), 'green')
console.log(hexColor('212 103 212'), 'magenta')
console.log(hexColor('101 101 092'), 'yellow')