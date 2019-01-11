// https://www.codewars.com/kata/hello-name-or-world

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// My Answer
function hello(name) {
    if (name) {
        let arr = name.toLowerCase().split('')
        console.log(arr)
        let capFirst = arr[0].toUpperCase()
        arr.splice(0, 1, capFirst)
        console.log(arr)
        let capName = arr.join('')
        return `Hello, ${capName}!`

    } else {
        return 'Hello, World!';
    }
}

// Best Practice
const hello = name => 
    `Hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : 'World'}!`;


console.log((hello('johN')))
console.log((hello('alice')))
console.log((hello(), 'Hello, World!'))
console.log((hello(''), 'Hello, World!'))