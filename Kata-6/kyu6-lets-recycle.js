// https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

// You will be given an array of object, every object might be composed like that:

// {
//   type: 'box',
//   material: 'paper'
// }
// or like that:

// {
//   type: 'bottle',
//   material: 'glass',
//   secondMaterial: 'paper'
// }
// Those are the materials that you might encounter: paper, glass, organic, plastic.

// An object can be made by one or two materials.

// If an object is made of two materials recycle it on BOTH of the correct bins.

// Recycle all the objects in a new nested array where the first nested array will contain paper, the second glass, the third organic and the fourth plastic, so given this array of objects:

// [
// {
//   type: 'rotten apples',
//   material: 'organic'
// },
// {
//   type: 'out of date yogurt',
//   material: 'organic',
//   secondMaterial: 'plastic'
// },
// {
//   type: 'wine bottle',
//   material: 'glass',
//   secondMaterial: 'paper'
// },
// {
//   type: 'amazon box',
//   material: 'paper'
// },
// {
//   type: 'beer bottle',
//   material: 'glass',
//   secondMaterial: 'paper'
// }
// ]
// You should return this nested array:

// [['wine bottle', 'amazon box', 'beer bottle'], ['wine bottle', 'beer bottle'], ['rotten apples', 'out of date yogurt'], ['out of date yogurt']]
// Rules:

// -There will always be the type and material property on every object, in some object there will be the secondMaterial property.

// -All the input provided will always have one or more valid object.

// -Always return a nested array with all the four bins inside even if they are empty, example: [['wine bottle', 'amazon box', 'beer bottle'], [], ['rotten apples', 'out of date yogurt'], []]

// -Put the items in the bins in the same order that you find it.

// My Answer
function recycle(arr) {
  let paper = [], glass = [], organic = [], plastic = [];

  arr.forEach(obj => {  
    if(obj.material === 'paper' || obj.secondMaterial === 'paper' ) paper.push(obj.type)
    if(obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
    if(obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
    if(obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)
  });

  return [paper, glass, organic, plastic]
}

// Best Practice
const recycleMaterials = ['paper', 'glass', 'organic', 'plastic'];

function recycle(obj) {
  return recycleMaterials.map(e => obj.filter(j => j.material === e || j.secondMaterial === e).map(e => e.type))
}



let a = [
  {type: 'rotten apples', material: 'organic'},
  {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  {type: 'amazon box', material: 'paper'},
  {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];
let b = [
  ['wine bottle', 'amazon box', 'beer bottle'],
  ['wine bottle', 'beer bottle'],
  ['rotten apples', 'out of date yogurt'],
  ['out of date yogurt']
];
console.log(recycle(a));