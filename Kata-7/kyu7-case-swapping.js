// https://www.codewars.com/kata/case-swapping/train/javascript

// Given a string, swap the case for each of the letters.

// e.g. CodEwArs --> cODeWaRS

// Examples
// swap ""         `shouldBe` ""
// swap "CodeWars" `shouldBe` "cODEwARS"
// swap "abc"      `shouldBe` "ABC"
// swap "ABC"      `shouldBe` "abc"
// swap "123235"   `shouldBe` "123235"

// My Answer
function swap(str){
  let splitStr = str.split('');
  let arr = [];

  for(let i = 0; i < splitStr.length; i++) {    
    if(splitStr[i].toLowerCase() === splitStr[i]) {
      arr.push(splitStr[i].toUpperCase());
    }
    else if(splitStr[i].toUpperCase() === splitStr[i]) {
      arr.push(splitStr[i].toLowerCase());
    } else {
      arr.push(splitStr[i]);
    }
  }
  return arr.join('');
}

// Using Regex
function swap(str) {
  return str.replace(/[a-zA-Z]/g, e => {
    return e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase();
  })
}


console.log(swap('HelloWorld'), 'hELLOwORLD');
console.log(swap('CodeWars'), 'cODEwARS');