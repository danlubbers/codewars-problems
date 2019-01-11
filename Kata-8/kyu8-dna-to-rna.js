// https://www.codewars.com/kata/dna-to-rna-conversion

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a funciton which translates a given DNA string into RNA.

// For example:

// DNAtoRNA("GCAT") returns ("GCAU")

// My Answer
function DNAtoRNA(dna) {
    return dna.split('').map(e => e === 'T' ?  'U' : e).join('')

}

// Best Practices using Regex
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA("TTTT"), "UUUU")
console.log(DNAtoRNA("GCAT"), "GCAU")
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")