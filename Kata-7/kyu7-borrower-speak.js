// https://www.codewars.com/kata/borrower-speak/train/javascript

// The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on.

// As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.

// The young borrowers have begged their parents to stop using caps and punctuation.

// Change the input text 's' to new borrower speak. Help save the next generation!

// My Answer
function borrow(str){
  const regexAlpha = /[A-Z]|/g;
  const regexWhiteSpaceAndSymbols = /\s+|\W/g;

  const lowerCase = str.split('').map(e => {
    if (e.match(regexAlpha))  {
      return e.toLowerCase();
    }
  }).join('');

  return lowerCase.replace(regexWhiteSpaceAndSymbols, ''); 
}

// Best Practice
function borrow(str) {
  return str.replace(/\W/g, '').toLowerCase();
}



console.log(borrow('WhAt! FiCK! DaMn CAke?'), 'whatfickdamncake');
console.log(borrow('THE big PeOpLE Here!!'), 'thebigpeoplehere'); 
console.log(borrow('i AM a TINY BoY!!'), 'iamatinyboy'); 
  