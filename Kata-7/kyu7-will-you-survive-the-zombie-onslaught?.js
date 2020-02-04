// https://www.codewars.com/kata/5deeb1cc0d5bc9000f70aa74/train/javascript

//I'm afraid you're in a rather unfortunate situation. You've injured your leg, and are unable to walk, and a number of zombies are shuffling towards you, intent on eating your brains. Luckily, you're a crack shot, and have your trusty rifle to hand.

// The zombies start at range metres, and move at 0.5 metres per second. Each second, you first shoot one zombie, and then the remaining zombies shamble forwards another 0.5 metres.

// If any zombies manage to get to 0 metres, you get eaten. If you run out of ammo before shooting all the zombies, you'll also get eaten. To keep things simple, we can ignore any time spent reloading.

// Write a function that accepts the total number of zombies, a range in metres, and the number of bullets you have.

// If you shoot all the zombies, return "You shot all X zombies." If you get eaten before killing all the zombies, and before running out of ammo, return "You shot X zombies before being eaten: overwhelmed." If you run out of ammo before shooting all the zombies, return "You shot X zombies before being eaten: ran out of ammo."

// (If you run out of ammo at the same time as the remaining zombies reach you, return "You shot X zombies before being eaten: overwhelmed.".)

// My Answer
function zombie_shootout(zombies, range, ammo) {
  if(ammo < zombies) {
    if(zombies > ammo && ammo > (range * 2)) {
        return `You shot ${range * 2} zombies before being eaten: overwhelmed.`;
    }
    if(zombies > ammo && ammo >= (range * 2)) {
      return `You shot ${ammo} zombies before being eaten: overwhelmed.`;
    }
    return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
  }
  
  if(zombies > (range * 2)) return `You shot ${range * 2} zombies before being eaten: overwhelmed.`;
  if(ammo >= zombies) return `You shot all ${zombies} zombies.`;
}

// Best Practice
function zombie_shootout(zombies, range, ammo) {
  const steps = range * 2;

  if(ammo < steps && zombies > ammo) return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
  if(zombies > steps) return `You shot ${steps} zombies before being eaten: overwhelmed.`

  return `You shot all ${zombies} zombies.`
}

// Looping
function zombie_shootout(zombies, range, ammo) {
  const zombieCount = zombies;

  while((zombies > 0) && (range > 0) && (ammo > 0)) {
    zombies -= 1
    range -= 0.5
    ammo -= 1
  }

  if(zombies === 0) return `You shot all ${zombieCount} zombies.`
  if(range === 0) return `You shot ${zombieCount - zombies} zombies before being eaten: overwhelmed.`
  if (ammo === 0) return `You shot ${zombieCount - zombies} zombies before being eaten: ran out of ammo.`
}

console.log(zombie_shootout(3, 10, 10), "You shot all 3 zombies.");
console.log(zombie_shootout(100, 8, 200), "You shot 16 zombies before being eaten: overwhelmed.");
console.log(zombie_shootout(50, 10, 8), "You shot 8 zombies before being eaten: ran out of ammo.");
console.log(zombie_shootout(50, 10, 49), "You shot 20 zombies before being eaten: overwhelmed.");
console.log(zombie_shootout(20, 10, 19), "You shot 19 zombies before being eaten: ran out of ammo.");
console.log(zombie_shootout(100, 10, 20), "You shot 20 zombies before being eaten: overwhelmed.");