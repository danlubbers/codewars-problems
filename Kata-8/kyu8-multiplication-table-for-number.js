// https://www.codewars.com/kata/multiplication-table-for-number

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// My Answer
function multiTable(number) {
    let table = ''
    for(let i = 1; i <= 10; i++) {
        if(i === 10) {
        table += `${i} * ${number} = ${i * number}`
        break
        }
        table += `${i} * ${number} = ${i * number}\n`
    }
    return table
}

// Best Practice
function multiTable(number) {
    return [...new Array(10)].map((_, i)=>`${i+1} * ${number} = ${number * i + number}`).join('\n')
}

// using Slice
function multiTable(number) {
    let table = '';
    for(let i = 1; i <= 10; i++){
      table += `${i} * ${number} = ${i*number}\n`
    }
    return table.slice(0, -1)
}

// Using for loop with array
function multiTable(number) {
    let res = [];
    for(let i = 1; i <= 10; i++) {
        res.push(i + ' * ' + number + ' = ' + i * number);
    }
    return res.join('\n')
}

console.log(multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
console.log(multiTable(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');
