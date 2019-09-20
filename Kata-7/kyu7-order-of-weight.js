// https://www.codewars.com/kata/order-of-weight/train/javascript

// Given an array of strings, sort the array into order of weight from light to heavy.

// Weight units are grams(G), kilo-grams(KG) and tonnes(T).

// Arrays will always contain correct and positive values aswell as uppercase letters.

// My Answer
function arrange(arr){
    let grams = [];
    let kilograms = [];
    let tonnes = [];
    let finalArr = [];

    for(let i = 0; i < arr.length; i++) {
        // console.log(/KG$/gi.test(arr[i]));
        if(/T$/.test(arr[i])) {
            tonnes.push(arr[i])
        } else if(/KG$/.test(arr[i])) {
            kilograms.push(arr[i])
        } else {
            grams.push(arr[i])
        }
    }

    finalArr.push(grams.map(e => e.replace('G', '')).sort((a, b) => a - b).map(e => `${e}G`));
    finalArr.push(kilograms.map(e => e.replace('KG', '')).sort((a, b) => a - b).map(e => `${e}KG`));
    finalArr.push(tonnes.map(e => e.replace('T', '')).sort((a, b) => a - b).map(e => `${e}T`));

    return [].concat(...finalArr);
}

// Best Practice
const dc  = {"G":1, "KG":1000, "T":1000000}
const trasf = a => /\d+/.exec(a)*dc[/[A-Z]+/.exec(a)[0]]
const arrange = arr => arr.sort((a, b) => trasf(a) > trasf(b))

console.log(arrange(["200G","300G","150G","100KG"]), ["150G","200G","300G","100KG"])
console.log(arrange(["400G","100T","150KG","100G"]), ["100G","400G","150KG","100T"])
console.log(arrange(["4T","300G","450G","900KG"]), ["300G","450G","900KG","4T"])
console.log(arrange(["400T","100T","1T","100G"]), ["100G","1T","100T","400T"])
console.log(arrange(["1G","2KG","3T","100KG"]), ["1G","2KG","100KG","3T"])
console.log(arrange(["100KG","100G","150T","150KG"]), ["100G","100KG","150KG","150T"])