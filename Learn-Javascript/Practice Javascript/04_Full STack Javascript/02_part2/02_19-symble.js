// Symbol();

/* const mySymble = Symbol("HEllo Symbol");
console.log(typeof mySymble);
console.log(mySymble); */

/* const compSymbol1 = Symbol("HEllo World");
const compSymbol2 = Symbol("HEllo World");

console.log(compSymbol1 === compSymbol2); */

/* const obj = {};
obj[mySymbol1] = "Value 1";
obj[mySymbol2] = "Value 2";

console.log(obj); */

/* let s1 = Symbol("name");
let s2 = Symbol("name");

const shanto = {};
shanto.age = 24;
shanto["Gender"] = "Male";
shanto["Location"] = "Dhaka";
shanto["Location"] = "Narayanganj";

shanto[s1] = "Saiful Islam";
shanto[s2] = " Shanto";

console.log(shanto); */
// -----------------------------------------

let fooIs = Symbol("Foo");
console.log(typeof fooIs);

let foodIs = {};
foodIs.f1 = "Mango";
foodIs.f2 = "Orange";
foodIs.f3 = "Goava";
foodIs.f4 = "JackFruit";
foodIs[fooIs] = "Banana";
foodIs[Symbol()] = "Rice ";
foodIs[Symbol()] = "More Food";

console.log(foodIs);
console.log("---------------");

for (let i in foodIs) {
  console.log(i);
}
