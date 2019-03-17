// https://www.codewars.com/kata/calculate-bmi

// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// My Answer
function bmi(weight, height) {
    const bmi = (weight / (height * height));
    // Could also use: weight/Math.pow(height,2)

    if(bmi <= 18.5) return 'Underweight';
    if(bmi <= 25) return 'Normal';
    if(bmi <= 30) return 'Overweight';
    
    return 'Obese';
}



console.log(bmi(80, 1.80), "Normal");
console.log(bmi(110, 1.80), "Overweight");
console.log(bmi(62.61637055718286, 1.5307227834835229), "Overweight");