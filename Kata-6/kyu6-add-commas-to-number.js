// https://www.codewars.com/kata/add-commas-to-a-number-1

// Your task is to convert a given number into a string with commas added for easier readability. The number should be rounded to 3 decimal places and the commas should be added at intervals of three digits before the decimal point. There does not need to be a comma at the end of the number.

// You will receive both positive and negative numbers.

// Examples
// commas(1) == "1"
// commas(1000) == "1,000"
// commas(100.2346) == "100.235"
// commas(1000000000.23) == "1,000,000,000.23"
// commas(-1) == "-1"
// commas(-1000000.123) == "-1,000,000.123"

// First Attempt - Failed 9 out of 248 due to 3rd decimal rounding
// function commas(num){
//     let addCommas = Math.round(num * 1000)/1000
//           return addCommas.toLocaleString()
// }


// 
function commas(num) {
    if (num.toString().match(/.\d{4}/)) {
        num = (Math.round(num * 1000)/1000).toString().replace(/0+$/, '')
    } return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}



console.log(commas(1)) // == "1"
console.log(commas(1000)) // == "1,000"
console.log(commas(100.2346)) // == "100.235"
console.log(commas(1000000000.23)) // == "1,000,000,000.23"
console.log(commas(-1)) // == "-1"
console.log(commas(-1000000.123)) // == "-1,000,000.123"
console.log(commas(-6586959444039.229))
console.log(commas(-9357989218247.121))