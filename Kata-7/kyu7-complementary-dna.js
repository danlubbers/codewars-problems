// https://www.codewars.com/kata/complementary-dna/train/javascript

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// My Answer
function DNAStrand(dna){
    let arr = dna.split('')
    return arr.map(e=> {
        switch(e) {
            case 'A': 
                return 'T' 
            case 'T':
                return 'A'  
            case 'G':
                return 'C'
            case 'C':
                return 'G'
        }}).join('')
}

// Best Practices
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
console.log(DNAStrand("GTAT"),"CATA","String GTAT is");