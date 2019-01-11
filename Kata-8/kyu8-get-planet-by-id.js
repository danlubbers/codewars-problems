// https://www.codewars.com/kata/get-planet-name-by-id

// The function is not returning the correct values. Can you figure out why?

// getPlanetName(3); // should return 'Earth'

function getPlanetName(id){
    switch(id){
      case 1:
        return 'Mercury'
      case 2:
        return 'Venus'
      case 3:
        return 'Earth'
      case 4:
        return 'Mars'
      case 5:
         return 'Jupiter'
      case 6:
        return 'Saturn'
      case 7:
        return 'Uranus'
      case 8:
        return 'Neptune'
    }
  }

console.log(getPlanetName(2), 'Venus');
console.log(getPlanetName(5), 'Jupiter');
console.log(getPlanetName(3), 'Earth');