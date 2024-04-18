/* 
    * -> string
    * -> Number
    * -> BigInt
    * -> Boolean
    * -> undefined => Not Initialize Variable
    * -> null
    * -> Symbol
    * -> Object

*/

// -> String

/* let x = "Hello ";
let y = "Javascript";
let all = x + y;
console.log(all);

for (let i = 0; i < all.length; i++) {
  console.log(i, " => ", all[i]);
} */

// -> Number

/* const num1 = 3;
console.log(num1);
const num2 = 3.433;
console.log(num2);
const num3 = 3e5;
console.log(num3); */

/* const num1 = 3 / 0;
console.log(num1); //* Infinity
const num2 = -3 / 0;
console.log(num2); //* -Infinity;
const num3 = "abc" / 3;
console.log(num3); //* NaN => not a number */

// -> BigInt

// const value = 900719925124740998n;
// console.log(value);

// BitInt and number cannot be added

// const valueX = 900719925124740998n;
// const More = valueX + 1; -> Show Error
// const More = valueX + 1n; -> Show correct ✅
// console.log(More);

// -> Boolean

/* const checkData = true;
const valueCounted = true;
console.log(typeof checkData);
console.log(typeof valueCounted); */

// -> undefined
// let x;
// console.log(x);

// let z = undefined;
// console.log(z);

// -> null
/* const num = "45gfdbd448";
console.log(num); */

// -> Symbol

/* const value1 = Symbol("Hello");
const value2 = Symbol("Hello");
console.log(typeof value1); */

// -> Object

let info = {
  name: "Shanto",
  age: 24,
  class: "6th",
};

console.log(info);
console.log(info.name);
console.log(info.age);
console.log(info.class);
