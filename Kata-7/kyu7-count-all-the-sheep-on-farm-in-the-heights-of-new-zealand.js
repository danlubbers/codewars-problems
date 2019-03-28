// https://www.codewars.com/kata/count-all-the-sheep-on-farm-in-the-heights-of-new-zealand/train/javascript

// Every week (Friday and Saturday night), the farmer and his son count amount of sheep returned to the yard of their farm.

// They count sheep on Friday night, the same goes for Saturday (suppose that sheep returned on Friday are not feeding back on hills on Saturday).

// As sheep are not coming in one flock, you will be given two arrays (one for each night) representing number of sheep as they were returning to the yard during the evenings (entries are positive ints, higher than zero).

// Farmer and his son know the total amount of their sheep, you will be given this number as third parameter.

// Your goal is to calculate the amount of sheep lost (not returned) to the farm after Saturday night counting.

// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5

// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6

// My Answer
function lostSheep(friday,saturday,total){
    if(friday.length === 0 && saturday.length === 0) return total;
    return total - friday.concat(...saturday).reduce((acc, curr) => acc + curr);
}

// Best Practice
function lostSheep(friday, saturday, total) {
    return friday.concat(saturday).reduce((acc, curr) => acc - curr, total);
}

// Using For in Loop
function lostSheep(friday, saturday, total) {
    let sum = 0;
    for (let i in friday) {
        sum += friday[i];
    }
    for (let i in saturday) {
        sum += saturday[i]
    }
    return total - sum;
}


console.log(lostSheep([1,2],[3,4],15),5);
console.log(lostSheep([3,1,2],[4,5],21),6);
console.log(lostSheep([5,1,4],[5,4],29),10);
console.log(lostSheep([11,23,3,4,15],[7,14,9,21,15],300),178);
console.log(lostSheep([2,7,13,17],[23,56,44,12,1,2,1,],255),77);
console.log(lostSheep([2,5,8],[11,23,3,4,15,112,12,4],355),156);
console.log(lostSheep([1,1,1,2,1,2],[2,1,2,1,2,1],30),13);
console.log(lostSheep([5,10,15],[11,23,3,4,15],89),3);
console.log(lostSheep([3,6,9,12],[3,2,1,2,3,1],44),2);
console.log(lostSheep([],[],15),15);