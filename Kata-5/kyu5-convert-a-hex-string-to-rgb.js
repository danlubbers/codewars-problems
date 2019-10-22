// https://www.codewars.com/kata/convert-a-hex-string-to-rgb/train/javascript

// When working with color values in JavaScript it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a hexStringToRGB() function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns an object with the structure {r:255, g:153, b:51} where r, g, and b range from 0 through 255
// Note, your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF").

// Example
// hexStringToRGB("#FF9933") // returns {r:255, g:153, b:51}

// My Answer
function hexStringToRGB(hex) {
    let hexObj = {
        r: 0,
        g: 0,
        b: 0
    };
 
    let splitHex = hex.split('').slice(1);
    
    let red = parseInt(splitHex.slice(0, 2).join(''), 16)
    let green = parseInt(splitHex.slice(2, 4).join(''), 16)
    let blue = parseInt(splitHex.slice(4).join(''), 16)

    hexObj.r = red;
    hexObj.g = green;
    hexObj.b = blue

    return hexObj 
}

// Best Practice
function hexStringToRGB(hex) {
    return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5), 16),
    };
}

console.log(hexStringToRGB("#FF9933"), {r:255, g:153, b:51});