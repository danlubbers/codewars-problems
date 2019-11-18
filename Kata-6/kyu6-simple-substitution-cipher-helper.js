// https://www.codewars.com/kata/simple-substitution-cipher-helper/train/javascript

// My Answer
function SubstitutionCipher(abc1, abc2) {
  let split1 = abc1.split('');
  let split2 = abc2.split('');
  let regex = /[a-z]/gi;

  this.encode = function (str) {
    let letterIdx = str.split('').map(e => {
      if(e !== regex && split1.indexOf(e) !== -1) {
       return split1.indexOf(e);
      } else {
        return e;
      }
    });
    
    return letterIdx.map(e => {
      if(typeof e !== 'string') {
        return split2[e];
      } else {
        return e;
      }
    }).join('');
  }
  
  this.decode = function (str) {
    let letterIdx = str.split('').map(e => {
      if(e !== regex && split2.indexOf(e) !== -1) {
       return split2.indexOf(e);
      } else {
        return e;
      }
    });
    
    return letterIdx.map(e => {
      if(typeof e !== 'string') {
        return split1[e];
      } else {
        return e;
      }
    }).join('');
  }
}

// Best Practice
function SubstitutionCipher(f, t) {
  this.encode = function (s) {
    return s.split('').map(function(_){return t[f.indexOf(_)] || _;}).join('')
  }
  this.decode = function (s) {
    return s.split('').map(function(_){return f[t.indexOf(_)] || _;}).join('')
  }
}

// using for loop
function SubtitutionCiper(abc1, abc2) {
  
  this.substitute = function (str, currentAbc, targetAbc) {
    let encoded = '';
    
    for(let i = 0; i < str.length; i++) {
      encoded += targetAbc[currentAbc.indexOf(str[i]) || str[i]]
    }
    return encoded;
  }

  this.encode = function(str) {
    return this.substitute(str, abc1, abc2)
  }

  this.decode = function(str) {
    return this.substitute(str, abc2, abc1)
  }
}


var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc")) // => "eta"
console.log(sub.encode("xyz")) // => "qxz"
console.log(sub.encode("aeiou")) // => "eirfg"

console.log(sub.decode("eta")) // => "abc"
console.log(sub.decode("qxz")) // => "xyz"
console.log(sub.decode("eirfg")) // => "aeiou"

// Not passing
var abc3 = "kimdnegrtxysbcfvjopqlazwhu"
var abc4 = "dijgkebfhwrqcpmxvyoasnzult"

var sub1 = new SubstitutionCipher(abc3, abc4);
console.log(sub1.encode("6kim")) // => "6dij"
console.log(sub1.encode("w4h&u")) // => "u4l&t"

