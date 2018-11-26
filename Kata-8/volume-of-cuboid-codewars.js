// https://www.codewars.com/kata/volume-of-a-cuboid

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

// My Answer
var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return length * width * height
  };

  return Kata;

})();

// Best Practice

var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    var l = parseFloat(length);
    var w = parseFloat(width);
    var h = parseFloat(height);

    if(isNaN(l) || isNaN(w) || isNaN(h)) return 0;
    if(l<=0 || w<=0 ||h <= 0)  return 0;
    
    return l*w*h;
  };

  return Kata;

})();

console.log(Kata.getVolumeOfCuboid(1,2,2), 4);
console.log(Kata.getVolumeOfCuboid(6.3,2,5), 63);