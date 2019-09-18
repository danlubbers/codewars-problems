// https://www.codewars.com/kata/grasshopper-order-of-operations/train/javascript

// Grasshopper Order of Operations
// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

// My Answer & Best Practice
function orderOperations () {
    return (2 + 2) * (2 + 2) * 2;
}

console.log(orderOperations(), 32)