// https://www.codewars.com/kata/breaking-search-bad/train/javascript

// We have a search function who return an array of titles that match the String passed as an argument.

// var titles = ['Rocky 1', 'Rocky 2', 'My Little Poney'];
// search('ock')  // ==> should return ['Rocky 1', 'Rocky 2']
// But the function return some weird result and skip some of the matching results.

// Does the function have special movie taste ?

// TITLES is a preloaded array of String to search throught

// My Answer | All we had to go was get rid of the g off the global regex
function search(searchTerm) {
  var search = new RegExp(searchTerm, 'i');
  
  return TITLES.filter(function(title) {
    return search.test(title);
  });
}

var result = [];

result = search('ho');
console.log(result.length, 3, 'on search term "ho"');
console.log(result, ['How I Met Your Mother', 'Doctor Who', 'The Hobbit']);
