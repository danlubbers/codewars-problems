// https://www.codewars.com/kata/check-the-exam

// The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// My first answer using Object
function checkExam(array1, array2) {
    let result = {'Correct':0, 'Incorrect':0, 'Blank':0};
    for(let i = 0; i < array1.length; i++) {
            if(array1[i] === array2[i]) {
                result['Correct'] += 4;  
            } else if(array2[i] === '') {
                result['Blank'] = 0
            } else {
                result['Incorrect']--
            }
    }

    // Turns the object values into an array
    const values = Object.values(result)
    // Use reduce to get the sum of the values in the array
    let total = values.reduce((a, b) => a + b, 0)
    
    return total < 0 ? 0 : total;
}

// Without Using an Object - Way easier
function checkExam(array1, array2) {
    let total = 0
    for(let i = 0; i < array1.length; i++) {
            if(array1[i] === array2[i]) {
                total += 4;  
            } else if(array2[i] === '') {
                total += 0
            } else {
                total-=1
            }
    }
    
    return total < 0 ? 0 : total;
}

// Best Practice
function checkExam(array1, array2) {
    const reducer = (a, e, idx) => {
        if(e === '') return a;
        if(e === array1[idx]) return a += 4;
        return --a;
    }
    const score = array2.reduce(reducer, 0);
    return score < 0 ? 0 : score;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  