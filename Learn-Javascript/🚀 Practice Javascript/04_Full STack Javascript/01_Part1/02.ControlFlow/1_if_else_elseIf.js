/*
 * if (condition) {...}
 * else if (condition) {...}
 * else {...}
 */

/* let A = 10;
let B = 20;

if (A > B) {
  console.log(`${A} is Greater Then ${B} `);
} else if (A < B) {
  console.log(`${A} is less Then ${B} `);
} else {
  console.log("Both Are Equal");
} */

/* let time = 50;
let greetings;

if (time < 11) {
  greetings = "Good Morning";
  console.log(greetings);
} else if (time < 20) {
  greetings = "Good Day";
  console.log(greetings);
} else {
  greetings = "Good Evening";
  console.log(greetings);
}
 */

// ==============================
// -> Challange

let password = 9;

if (password == 8) {
  console.log("welcome");
} else if (password <= 8) {
  console.log("Password is top short");
} else if (password >= 8) {
  console.log(`Too Long Password\nPassword should be 8 Chracters `);
} else {
  console.log("Please Provide a Password");
}
