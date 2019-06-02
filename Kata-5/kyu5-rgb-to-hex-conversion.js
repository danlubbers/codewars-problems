// https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript

// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000

// My Answer
function rgb(r, g, b){
    if (r > 255) r = 255; 
    if (g > 255) g = 255;
    if (b > 255)  b = 255;

    if (r < 0) r = 0; 
    if (g < 0) g = 0;
    if (b < 0) b = 0;

    let red = r.toString(16); 
    let green = g.toString(16)
    let blue = b.toString(16)

    if (red.length === 1) red = '0' + red;
    if (green.length === 1) green = '0' + green;
    if (blue.length === 1)  blue = '0' + blue;
    
    return (red + green + blue).toString().toUpperCase();
}

// Best Practice
function rgb(r, g, b) {
    return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if (d < 0) return '00';
    if (d > 255) return 'FF';
    return ('0'+(Number(d).toString(16))).slice(-2).toUpperCase();
}

// Second Best way
function rgb(r, g, b) {
    return [r,g,b].map(e => {
        return ('0'+Math.max(0, Math.min(255, e)).toString(16)).slice(-2);
    }).join('').toUpperCase();
}

// I found interesting
const rgb = (r, g, b) => [r, g, b]
  .map(x => Math.max(x, 0))
  .map(x => Math.min(x, 255))
  .map(x => x.toString(16))
  .map(x => x.padStart(2, 0))
  .join('')
  .toUpperCase()

console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300,255,255), 'FFFFFF')
console.log(rgb(173,255,47), 'ADFF2F')

console.log(rgb(182,3,298), 'B603FF')