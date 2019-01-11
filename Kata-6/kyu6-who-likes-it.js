// https://www.codewars.com//kata/5266876b8f4bf2da9b000362

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

// My Answer
function likes(names) {
    switch (names.length) {
        case 0:
            return `no one likes this`;
        case 1:
            return `${names[0]} likes this`;
        case 2: 
            return `${names[0]} and ${names[1]} like this`;
        case 3: 
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default: 
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

// Second Best Practice but Highest Clever
function likes (names) {
    var templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ]

    var idx = Math.min(names.length, 4)
    console.log(idx)

    return templates[idx].replace(/{name}|{n}/g, function (val) {
        return val === '{name}' ? names.shift() : names.length;
    })
}


console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');