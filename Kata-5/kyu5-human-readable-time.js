// https://www.codewars.com/kata/human-readable-time/train/javascript

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// My Answer
function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600); 
    console.log(hours)
    seconds %= 3600
    let min = Math.floor(seconds / 60);
    console.log(min)
    let sec = seconds % 60;
    console.log(sec)

    hours = String(hours).padStart(2, '0')
    min = String(min).padStart(2, '0')
    sec = String(sec).padStart(2, '0')

    return hours + ':' + min + ':' + sec
}

// Best Practice
function humanReadable(seconds) {
    let pad = function(x) {return (x < 10) ? '0'+x : x;}
    return  pad(parseInt(seconds / (60 * 60))) + ':' +
            pad(parseInt(seconds / 60 % 60)) + ':' + 
            pad(seconds % 60)
}

console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5), '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
