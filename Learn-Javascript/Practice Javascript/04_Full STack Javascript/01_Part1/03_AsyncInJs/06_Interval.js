// |> setInterval
// * একটি ব্লক অফ কোড [ফাংশন] কতক্ষণ পর পর এক্সিকিউট বা চলবে সেইটা নির্ধারন করা হয় setInterval দিয়ে।

/* function greet() {
  console.log("HELLO WORLD");
}

setInterval(greet, 1000);
 */

/* function showTime() {
  let dateTime = new Date();

  let time = dateTime.toLocaleTimeString();
  console.log(time);
}

let display = setInterval(showTime, 5000); */

// -> SetTimeOut
// * একটি ব্লক অফ কোড [ফাংশন] কতক্ষণ পর এক্সিকিউট বা চলবে সেইটা নির্ধারন করা হয় SetTimeOut দিয়ে।

/* setTimeout(function () {
  console.log(`This function will be executed after 3 sec`);
}, 3000); */

/* function showTime() {
  let dateIs = new Date();
  let showTimeIs = dateIs.toLocaleTimeString();
  console.log(showTimeIs);
}

let x = setTimeout(showTime, 3000);
console.log(x); */
/* 
function greet() {
  console.log("Hello WOrld");
}

setTimeout(greet, 3000);
console.log("THIs Message is show first"); */

/* function greet() {
  console.log("Hello WOrld");
}

let intervalId = setTimeout(greet, 3000);
console.log("Id " + intervalId);
 */

// =================================================

/* function xyz() {
  console.log("Hello World");
}

// let XyzIs = setInterval(xyz, 3000);
let XyzIs = setTimeout(xyz, 3000);
 */

//  |> Stop the interval after 10 Seconds
const interValId = setInterval(function () {
  console.log(`This function executed at the interval`);
}, 1000);

//  |> Stop the interval after 10 Seconds
// * clearInterval দিয়ে কতক্ষণ পরে setInterval বন্ধ হবে সেইটা নির্ধারন করা হয়।
setTimeout(function () {
  clearInterval(interValId);
  console.log(`Interval Stopped`);
}, 10000);
