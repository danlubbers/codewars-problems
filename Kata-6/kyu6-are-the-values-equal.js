// https://www.codewars.com/kata/are-the-values-equal/train/javascript

// Create the areEqual function that will return true if the two supplied arguments hold exactly the same values and the same number of values (not necessarily in the same order) and false if they do not.

// The supplied arguments will be objects, arrays and strings.

// Examples:

// {laura:4, adam:3} & {laura:4, adam:3} => true 
// {adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
// [{a:4},{b:3}] & [{b:3},{a:4}]) => true
// {a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
// 'Hello' & 'Hello' => true

// Since Codewars does not use Object.entries, I had to use this Polyfill
// if (!Object.entries) {
//     Object.entries = function( obj ){
//       var ownProps = Object.keys( obj ),
//           i = ownProps.length,
//           resArray = new Array(i); // preallocate the Array
//       while (i--)
//         resArray[i] = [ownProps[i], obj[ownProps[i]]];
      
//       return resArray;
//     };
//   }

// My Answer: I pass all the tests in VSCode but the last one will not pass in Codewars
function areEqual(val1, val2) {
    if(typeof val1 === 'string') return val1.includes(val2)
    if(typeof val1 === 'undefined') return val1 === val2;
    if(typeof val1 === 'object') {
        let entries1 = Object.entries(val1).sort()
        console.log(entries1)
        let entries2 = Object.entries(val2).sort()
        console.log(entries2)

        let arr1 = [];
        let arr2 = [];

        for(const [key1, prop1] of entries1) {
            console.log(key1)
            console.log(prop1)
            arr1.push(prop1)
        }
        for(const [key2, prop2] of entries2) {
            console.log(key2)
            console.log(prop2)
            arr2.push(prop2)
        }

        if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true
        else return false
    }
}

// My answer googling using Lodash
function areEqual(value1, value2) {
    return require("lodash").isEqual(value1, value2);
}

// Best Practice
function areEqual(value1, value2) {
    if(typeof value1 !== 'object' || typeof value2 !== 'object')
        return value1 === value2;

    const keys = [...new Set([
        ...Object.keys(value1),
        ...Object.keys(value2)
        ])
    ]
    return keys.every(e => areEqual(value1[e], value2[e]))
}

// Most Readable - Issues in VScode but passes Codewars
// function areEqual(value1, value2) {
//     const keys1 = Object.keys(value1);
//     const keys2 = Object.keys(value2);
    
//     if (keys1.length != keys2.length) return false;
//     return keys1.every((key) => {
//       if (typeof value1[key] === "object" && typeof value1[key] === "object") {
//         return areEqual(value1[key], value2[key])
//       }
//       return value1[key] === value2[key]
//     });
// }


console.log(areEqual([{a:3},{b:4}],[{a:'3'},{b:'4'}]), false);
console.log(areEqual({a:[2,3],b:[4]},{b:[4],a:[2,3]}), true);
console.log(areEqual({adam:3, laura:4},{laura:4, adam:3}), true);
console.log(areEqual({adam:3, laura:4, maisie:2},{adam:3, laura:4}), false);
console.log(areEqual({a:3},{b:4},{b:3},{a:4}), false);
console.log(areEqual('Hello', 'Hello'), true)
// Test that passes here but not codewars
console.log(areEqual([ { a: [ 2, 3, 5, 6, 7 ], b: [ 4, 5, 6 ] } ] [ { b: [ 4, 5, 6 ], a: [ 2, 3, 5, 6, 7 ] } ]), true)