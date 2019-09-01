// https://www.codewars.com/kata/count-strings-in-objects/train/javascript

// Create a function strCount (takes an object as argument) that will count all string key inside an object. For example:

// strCount({
//     first: "1",
//     second: "2",
//     third: false,
//     fourth: ["anytime",2,3,4],
//     fifth:  null
//     })
    //returns 3

    // My Answer
function strCount(obj){
    let count = 0;

    for (let key in obj) {
        if (typeof obj[key] == 'string') count++;
        if (typeof obj[key] == 'object') count += strCount(obj[key]);
    }

     return count;

}



console.log(strCount({
    first:  "1",
    second: "2",
    third:  false,
    fourth: ["anytime",2,3,4],
    fifth:  null,
    sixth:  undefined,
    seventh:{}
    }),3);
  
  