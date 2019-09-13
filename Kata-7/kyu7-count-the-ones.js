// https://www.codewars.com/kata/count-the-ones/train/javascript

// The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

// hammingWeight(10) // 1010  => 2
// hammingWeight(21) // 10101 => 3
// The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)

// First Try works but doesn't pass Codewars due to use of toString
function hammingWeight(x){
    return x.toString(2).split('').filter(e => e === '1').length;
}

// My Answer after googling hammingweight
function hammingWeight(x) {
    let count = 0

    while (x > 0) {
        count = count + 1
        x = x & (x-1)
    }
    return count
}

// Most Clever
function hammingWeight(x) {
    return x ? x % 2 + hammingWeight(x>>1) : x;
}


console.log(hammingWeight(10), 2)
console.log(hammingWeight(21), 3)