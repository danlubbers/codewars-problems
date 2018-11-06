// In Bali, as far as I can gather, when ex-pats speak to locals, they basically insert the word 'Pak' as often as possible. I am assured it means something like 'mate' or 'sir' but that could be completely wrong.

// Anyway, as some basic language education(??) this kata requires you to turn any sentence provided (s) into ex-pat balinese waffle by inserting the word 'pak' between every other word. Simple 8kyu :D

// Pak should not be the first or last word. Strings of just spaces should return an empty string.

function pak(str) {
    let pakArr = [];
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (i % 1 === 0) {
            pakArr.push(`${arr[i]}`)
            pakArr.push('pak')
        } 
    }
    pakArr.pop()
    return pakArr.join(' ')
}




console.log(pak('Man I need a taxi up to Ubud'), 'Man pak I pak need pak a pak taxi pak up pak to pak Ubud');
console.log(pak('What time are we climbing up the volcano?'), 'What pak time pak are pak we pak climbing pak up pak the pak volcano?'); 
console.log(pak('Take me to Semynak!'), 'Take pak me pak to pak Semynak!'); 