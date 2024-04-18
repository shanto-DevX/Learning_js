// * https://dev.to/tywenk/javascript-shorthands-ternary-logical-and-assignments-14ea

/* var names = "";
var fullName = "";

if (names.length === 0) {
  fullName = "Shanto";
} else {
  fullName = names;
}

console.log(fullName); */

// -> Or || ShortHand
let names = "";
let fullName = names || "shanto";
// console.log(fullName);

let a = 5;
let b = 8;

let results = b > a || a > b;
console.log(results);

// ----------------------------

// -> && ShortHand
// var isOk = true;s
// var result = isOk && "Everything is ok";s
// console.log(result);
