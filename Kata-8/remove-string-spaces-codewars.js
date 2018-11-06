// https://www.codewars.com/kata/remove-string-spaces

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(str){
    let regex = /\s/g;
    return str.replace(regex, '')
}

console.log((noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')));
console.log((noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd')); 
console.log((noSpace('8aaaaa dddd r     '), '8aaaaaddddr')); 
