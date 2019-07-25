// https://www.codewars.com/kata/tip-calculator/train/javascript

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

// My Answer
function calculateTip(amount, rating) {
    let lowerCaseRating = rating.toLowerCase();
    switch(lowerCaseRating) {
        case 'terrible':
            return 0;
        case 'poor': 
            return Math.ceil((amount * .05))
        case 'good': 
            return Math.ceil((amount * .10))
        case 'great': 
            return Math.ceil((amount * .15))
        case 'excellent': 
            return Math.ceil((amount * .20))
        default: 
            return 'Rating not recognised'
    }
}

// Best Practice
const TIPS = {
    "terrible": 0.0,
    "poor": 0.05,
    "good": 0.1,
    "great": 0.15,
    "excellent": 0.2
}

const calculateTip = (amount, rating) => {
    rating = rating.toLowerCase();

    return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
}

console.log(calculateTip(20, "Excellent"), 4);
console.log(calculateTip(26.95, "good"), 3);
console.log(calculateTip(30, "poor"), 2);