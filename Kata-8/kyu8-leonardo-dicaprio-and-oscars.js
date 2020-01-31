// https://www.codewars.com/kata/56d49587df52101de70011e4/train/javascript

// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

// My Answer
function leo(oscar) {
    if(oscar > 88) return 'Leo got one already!'
    if(oscar === 88) return 'Leo finally won the oscar! Leo is happy';
    if(oscar === 86) return 'Not even for Wolf of wallstreet?!';
    else return'When will you give Leo an Oscar?';
}

// Using Switch
function leo(oscar){
  switch(true){
    case oscar > 88: return 'Leo got one already!'; 
    case oscar === 88: return 'Leo finally won the oscar! Leo is happy';
    case oscar === 86: return 'Not even for Wolf of wallstreet?!';
    default: return 'When will you give Leo an Oscar?'
  }
}

console.log(leo(88),"Leo finally won the oscar! Leo is happy");