// https://www.codewars.com/kata/holiday-v-seasick-snorkelling/train/javascript

// Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

// Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.

// Remember, only the process of change from wave to calm (and vice versa) will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that figure is more than 20% of the string, return "Throw Up", if less, return "No Problem".

// My Answer
function seaSick(str){  
  let count = 0;
  for(let i = 0; i < str.length - 1; i++) {
    if(str[i] !== str[i + 1]) {
      count++;
    } 
  }
  return  count / str.length > 0.2 ? 'Throw Up' : 'No Problem';
}

// Best Practice
function seaSick(str) {
  return str.split('').filter((e, i) => (e === '~' && str[i+1] === '_') || (e === '_' && str[i + 1] === '~')).length > 0.2 * str.length ? 'Throw Up' : 'No Problem';
}

// Clever
function seaSick(str) {
  let underscoreTilda = str.split('_~').length - 1;
  let tildaUnderscore = str.split('~_').length - 1;
  return (underscoreTilda + tildaUnderscore) / str.length * 0.2 ? 'Throw Up' : 'No Problem';
}

console.log(seaSick("~"), "No Problem");
console.log(seaSick("_~~~~~~~_~__~______~~__~~_~~"), "Throw Up");
console.log(seaSick("______~___~_"), "Throw Up");