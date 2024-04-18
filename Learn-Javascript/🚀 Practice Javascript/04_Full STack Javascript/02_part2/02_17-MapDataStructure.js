// https://www.w3schools.com/js/js_object_maps.asp

// const map = new Map();
// // console.log(map);

// const keyOne = "string";
// const keyTwo = {};
// const keyThree = function () {};

// map.set(keyOne, "Value Of Key One");
// map.set(keyTwo, "Value Of Key Two");
// map.set(keyThree, "Value Of Key Three");
// console.log(map.keys());
// console.log(map.values());
// console.log(map.delete(keyTwo));
// console.log(map.size);
// console.log(map);

/* for (let [key, value] of map) {
  console.log(`${key} -- ${value}`);
}

for (let key of map.keys()) {
  console.log(key);
} 

for (let value of map.values()) {
  console.log(value);
}

*/

// * => 1
/* const person = {
  firstName: "Saiful Islam",
  lastname: "shanto",
};

console.log(person); */

// * => 2
/* const person = new Map();

person.set("FirstName : Saiful Islam");
person.set("LastName : Shanto");

console.log(person); */

/* const person = (["Apple", 500], ["Banana", 300], ["Orange", 280]);

console.log(); */

// -------------------------------------------------------------------

/* let mapIs = new Map();
// console.log(mapIs);

let key1 = "String";
let key2 = {};
let key3 = [];
let key4 = function () {};

mapIs.set(key1, "Hello 1");
mapIs.set(key2, "Hello 2");
mapIs.set(key3, "Hello 3");
mapIs.set(key4, "Hello 4"); */

// console.log(mapIs);
// console.log(mapIs.keys());
// console.log(mapIs.delete(key2));
// console.log(mapIs);
// console.log(mapIs.size);

/* for (let [key, value] of mapIs) {
  console.log(`${key} --- ${value}`);
} */

/* for (let key of mapIs.keys()) {
  console.log(`${key}`);
} */

/* for (let values of mapIs.values()) {
  console.log(values);
} */

// * ---------------------------------------------------------

/* let MapIs = new Map();

let key1 = "a";
let key2 = "b";
let key3 = "c";

MapIs.set(key1, 1);
MapIs.set(key2, 2);
MapIs.set(key3, 3);

console.log(MapIs);
console.log(MapIs.get(key1));
console.log(MapIs.size);
MapIs.delete(key2);
console.log(MapIs);
console.log(MapIs.size);
 */

/* 
let mapIs = new Map();
// console.log(typeof mapIs);

let key1 = "a";
let key2 = "b";
let key3 = "c";

mapIs.set(key1, 1);
mapIs.set(key2, 2);
mapIs.set(key3, 3);

console.log(mapIs);
console.log(mapIs.get(key2));
console.log(mapIs.size);
console.log(mapIs.delete(key2));
console.log(mapIs); */

/* let fullName = new Map();

fullName.set("First Name", "Saiful");
fullName.set("Middle Name", " Islam ");
fullName.set("Last Name", "Shanto");

console.log(fullName);
console.log(fullName.get("Middle Name")); */

// console.log(fullName);

let helloMaps = new Map();

helloMaps.set("a", 1);
helloMaps.set("b", 2);
helloMaps.set("c", 3);

console.log(helloMaps);
console.log(helloMaps.get("b"));
