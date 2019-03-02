// https://www.codewars.com/kata/whats-up-next

// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

// When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

// nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
// nextItem("testing", "t") # "e"

// My answer passes all but one weird test
// function nextItem(xs, item) {
//     console.log(xs, item)
//         let index = xs.indexOf(item)
//         return index !== -1 ? xs[index + 1] : undefined;
// }

function nextItem(xs, item) {
    let found = false;
    let finalValue = 0;

    for(let i of xs) {
        if(found) {
            finalValue = i;
            break
        }
        if(i === item) found = true
    }
    return finalValue === 0 ? undefined : finalValue
}

// Best Pracice
function nextItem(xs, item) {
    let found = false;
    for (let i of xs) {
        if(found) return i;
        if(i === item) found = true;
    }
    return undefined
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);
console.log(nextItem(['a', 'b', 'c'], 'd'), undefined);
console.log(nextItem(['a', 'b', 'c'], 'c'), undefined);
console.log(nextItem("testing", "t"), "e");