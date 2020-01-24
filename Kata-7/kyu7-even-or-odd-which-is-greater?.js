// https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript

// Given a string of numbers confirm whether the total of all the individual even numbers are greater than the total of all the indiviudal odd numbers. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return:

// 'Even is greater than Odd'

// If the sum of odd numbers is greater than the sum of even numbers return:

// 'Odd is greater than Even'

// If the total of both even and odd numbers are identical return:

// 'Even and Odd are the same'

// My Answer & Best Practice
function evenOrOdd(str) {
  let even = [],
      odd  = [];

  str.split('').map(e => e % 2 === 0 ? even.push(e) : odd.push(e));

  const evenSum = even.reduce((acc, curr) => +acc + +curr);
  const oddSum = odd.reduce((acc, curr) => +acc + +curr);
    
  return evenSum > oddSum ? 'Even is greater than Odd' : oddSum > evenSum ? 'Odd is greater than Even' : 'Even and Odd are the same';
}

// Most Clever
function evenOrOdd(str) {
  const [even, odd] = [...str].reduce((acc, curr) => {
    acc[curr & 1] += +curr;
    return acc;
  }, [0, 0])
  
  return even > odd ? 'Even is greater than Odd' : odd > even ? 'Odd is greater than Even' : 'Even and Odd are the same';
}

console.log(evenOrOdd('12'), 'Even is greater than Odd');
console.log(evenOrOdd('123'), 'Odd is greater than Even');
console.log(evenOrOdd('112'), 'Even and Odd are the same');