// https://www.codewars.com/kata/students-final-grade

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples:

// finalGrade(100, 12);  // 100
// finalGrade(99, 0);    // 100
// finalGrade(10, 15);   // 100

// finalGrade(85, 5);    // 90

// finalGrade(55, 3);    // 75

// finalGrade(55, 0);    // 0
// finalGrade(20, 2);    // 0

// My Answer
function finalGrade (exam, projects) {
    console.log(exam, projects)
    if(exam > 90  || projects > 10) {
        return 100
    } else if(exam > 75 && projects >= 5) {
        return 90
    } else if(exam > 50 && projects >= 2) {
        return 75
    } else {
        return 0
    }
}

// Best Practice
function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100;
    if(exam > 75 & projects >= 5) return 90;
    if(exam > 50 & projects >= 2) return 75;
    return 0;
}


console.log(finalGrade(100, 12));  // 100
console.log(finalGrade(99, 0))   // 100
console.log(finalGrade(10, 15))   // 100

console.log(finalGrade(85, 5))    // 90

console.log(finalGrade(55, 3))    // 75

console.log(finalGrade(55, 0));    // 0
console.log(finalGrade(20, 2));    // 0

console.log(finalGrade(59, 7));
console.log(finalGrade(88, 12)); // 90 
console.log(finalGrade(80, 10)) // 90