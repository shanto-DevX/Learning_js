// 23-1 Module Introduction and isArray, /includes, concat

const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {
  id: 121,
  class: 11,
  names: "shanto",
};
const frined = [13, 14, 15, 17, 16, 21, 15, 20];


function add(num1,num2){
    return num1+num2
}

console.log(typeof country)
console.log(typeof age)
console.log(typeof isIndependent)
console.log(typeof student)
// -> check array using array.isArray
console.log(Array.isArray(frined))
console.log(typeof add)

// --------------------------

console.log(frined.includes(16))
if(frined.indexOf(252) !== -1){
    
}
// -> Concat

let x = [10,20,30]
let y = [12,51,21]

const allFrined = x.concat(y)
console.log(x)
console.log(y)
console.log(allFrined)