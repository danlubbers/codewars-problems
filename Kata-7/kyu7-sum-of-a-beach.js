// https://www.codewars.com/kata/sum-of-a-beach/train/javascript

// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4
// sumOfABeach("cItYTowNcARShoW")               ==>  0

// My Answer using Regex
function sumOfABeach(beach) {
    return beach.match(/(?:sand|water|fish|sun)/gi) === null ? 0 : beach.match(/(?:sand|water|fish|sun)/gi).length;
}

// Best Practice Regex
// const sumOfABeach = beach => (beach.match(/sand|water|fish|sun/gi) || []).length

// Using For Loop
function sumOfABeach(beach) {
    let result = 0;
    beach = beach.toLowerCase();
    let elements = ['sand', 'water', 'fish', 'sun'];
    for(let i = 0; i < elements.length; i++) {
        while (beach.includes(elements[i])) {
            beach = beach.replace(elements[i], '');
            result++
        }
    }
    return result;
}

// Lots of matches
function sumOfABeach(beach) {
    let sand = (beach.match(/sand/gi) || []).length;
    let water = (beach.match(/water/gi) || []).length;
    let fish = (beach.match(/fish/gi) || []).length;
    let sun = (beach.match(/sun/gi) || []).length;

    return sand+water+fish+sun
}

console.log(sumOfABeach("WAtErSlIde"), 1)
console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN"), 3)
console.log(sumOfABeach("gOfIshsunesunFiSh"), 4)
console.log(sumOfABeach("cItYTowNcARShoW"), 0)
