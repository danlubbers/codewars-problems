// https://www.codewars.com/kata/return-to-sanity/train/javascript

// This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
    var results =
      {sanity: 'Hello'};
    return results;
  }
console.log(mystery(), {sanity: 'Hello'}, 'Mystery has not returned to sanity');