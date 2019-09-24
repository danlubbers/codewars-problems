// https://www.codewars.com/kata/grasshopper-shopping-list/train/javascript

// You are in charge of ordering food for a party. You are going to need 4 sandwiches, 6 salads, 5 wraps, and 10 orders of french fries. The cost per item of food is:

// food	price
// sandwich	$8.00
// salad	$7.00
// wrap	$6.50
// french fries	$1.20
// Create 4 variables to store the quantity of each type of food with the following names:

// sandwiches
// salads
// wraps
// frenchFries
// Create a variable named totalPrice that finds the cost of all of the food.

// My Answer
const sandwiches = 4;
const salads = 6;
const wraps = 5;
const frenchFries = 10;

const totalPrice = (sandwiches * 8) + (salads * 7) + (wraps * 6.50) + (frenchFries * 1.20);
console.log(totalPrice);

// Best Practice
let [sandwiches, salads, wraps, frenchFries] = [4, 6, 5, 10];
totalPrice = (sandwiches * 8) + (salads * 7) + (wraps * 6.50) + (frenchFries * 1.20);