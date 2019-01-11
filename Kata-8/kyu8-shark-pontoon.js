// https://www.codewars.com/kata/holiday-vi-shark-pontoon

// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables: sharkDistance = distance the shark needs to cover to eat you in metres, sharkSpeed = how fast it can move in metres/second, pontoonDistance = how far you need to swim to safety in metres, youSpeed = how fast you can swim in metres/second, dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// If you make it, return "Alive!", if not, return "Shark Bait!".

// My Answer
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let me = pontoonDistance / youSpeed;
    let shark = sharkDistance / sharkSpeed;
    if ((dolphin ? (me / 2) : me) < shark) {
        return "Alive!"
    } else {
        return "Shark Bait!"
    }
}

// Best Practice
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
      sharkSpeed /= 2;
    }
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}


console.log(shark(12, 50, 4, 8, true), "Alive!");
console.log(shark(7, 55, 4, 16, true), "Alive!");
console.log(shark(24, 0, 4, 8, true), "Shark Bait!");
console.log(shark(44, 28, 3, 2, true), "Alive!");