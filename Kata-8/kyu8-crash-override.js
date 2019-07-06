// https://www.codewars.com/kata/crash-override

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// I have created two objects that return a one word name in response to the first letter of your first name and one for the first letter of your surname.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

let firstName = { 
    A: 'Alpha',
    B: 'Beta',
    C: 'Cache',
    D: 'Data',
    E: 'Energy',
    F: 'Function',
    G: 'Glitch',
    H: 'Half-life',
    I: 'Ice',
    J: 'Java',
    K: 'Keystroke',
    L: 'Logic',
    M: 'Malware',
    N: 'Nagware',
    O: 'OS',
    P: 'Phishing',
    Q: 'Quantum',
    R: 'RAD',
    S: 'Strike',
    T: 'Trojan',
    U: 'Ultraviolet',
    V: 'Vanilla',
    W: 'WiFi',
    X: 'Xerox',
    Y: 'Y',
    Z: 'Zero' 
} 
let surname = { 
    A: 'Analogue',
    B: 'Bomb',
    C: 'Catalyst',
    D: 'Discharge',
    E: 'Electron',
    F: 'Faraday',
    G: 'Gig',
    H: 'Hacker',
    I: 'IP',
    J: 'Jabber',
    K: 'Killer',
    L: 'Lazer',
    M: 'Mike',
    N: 'n00b',
    O: 'Overclock',
    P: 'Payload',
    Q: 'Quark',
    R: 'Roy',
    S: 'Spy',
    T: 'T-Rex',
    U: 'Unit',
    V: 'Virus',
    W: 'Worm',
    X: 'X',
    Y: 'Yob',
    Z: 'Zombie' 
}

// My Answer
function aliasGen(str1, str2){
    let split1 = str1.split(' ');
    let split2 = str2.split(' ')
    let firstNameLetter = split1.map(e => e[0].toUpperCase()) 
    let firstSurnameLetter = split2.map(e => e[0].toUpperCase()) 
    
    if (!isNaN(firstNameLetter) || !isNaN(firstSurnameLetter)) return "Your name must start with a letter from A - Z."

    else return firstName[firstNameLetter] + " " + surname[firstSurnameLetter]  
}

// Best Practice
const initialCap = str => str[0].toUpperCase();
const isValidName = name => /^[a-z]/i.test(name);
function aliasGen(firstName, lastName) {
    return (isValidName(firstName) && isValidName(lastName))
        ? `${firstName[initialCap(firstName)]} ${surname[initialCap(lastName)]}`
        : 'Your name must start with a letter from A - Z.';
}

// Using Regex and using spread operator
function aliasGen(...arr) {
    let first = arr[0][0].toUpperCase();
    let last = arr[1][0].toUpperCase();
    if(arr[0][0].match(/[\d]/) || arr[1][0].match(/[\d]/)){
        return "Your name must start with a letter from A - Z."
    }

    return firstName[first] + " " + surname[last];
}


console.log(aliasGen("Mike", "Millington"), "Malware Mike");
console.log(aliasGen("Fahima", "Tash"), "Function T-Rex");
console.log(aliasGen("Daisy", "Petrovic"), "Data Payload");
console.log(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
console.log(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");
