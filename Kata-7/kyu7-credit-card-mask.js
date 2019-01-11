// https://www.codewars.com/kata/credit-card-mask/

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"
// My answer
function maskify(cc) {
    let split = cc.split('');
    for(let i = 0; i < cc.length - 4; i++) {
        split[i] = '#'
    }   
    return split.join('')
}

// Second Answer
// function maskify(cc) {
//     let hash = '';
//     for(let i = 0; i < cc.length - 4; i++) { 
//         hash += '#';
//     }
//     for(let j = 4; j >= 1; j--) {
//         hash += cc.charAt(cc.length - j)
//     }  
//     return hash
// }

// Best Practice 
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');