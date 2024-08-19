/*

 |> map
 * Variable.map((callBackFunction) => condition)
 * Variable.map((callBackFunction) => {return condition})
 * নুতুন এরে ব্যবহার করে, পুরাতনটা ব্যবহার করে না। 

 |> চেইনিং
  * দুই তিন মেথড একসাথে ব্যবহার করা যায়।

 */

/* const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const add10 = myNumbers.map((num) => num + 10);
// const add10 = myNumbers.map((num) => { return num + 10; });
let modifyValue = [];
const add10 = myNumbers.forEach((x) => {
  modifyValue.push(x + 10);
});
console.log(add10);
console.log(modifyValue);
 */

// =======================================================

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* 
// |> using map methdos
let addNumbers = myNumbers.map((x) => x + 10);
console.log(addNumbers); 
*/

// |> Using forEach

/* let addnumbers = [];
let addingNum = myNumbers.forEach((item) => {
  addnumbers.push(item + 10);
});

console.log(addnumbers); */

// =======================================================

/*  

  |> চেইনিং
  * দুই তিন মেথড একসাথে ব্যবহার করা যায়।
  * x.map(() => Operation).map(() => Operation).filter((cb) => condition);
  
  * myNumbers
  ->  .map((num) => num * 10)
  ->  .map((newNums) => newNums + 2)
  ->  .filter((num) => num >= 40);
  * এখানে প্রথমে, প্রথম map এর কাজ হবে এর পরে, প্রথম map এর কাজ শেষ হলে সেইটার ডাটার উপরে ভিত্তি করে পরের মেপ কাজ করবে এবং এর পরে filter এর কাজ হবে দ্বিতীয় মেপ এর উপর।

*/

/* const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = myNumbers
  .map((num) => num * 10)
  .map((newNums) => newNums + 2)
  .filter((num) => num >= 40);

console.log(newNum); */

var numbers = [1, 2, 4, 5, 6, 8, 9];

let retults = numbers.map((num) => {
  return 2 * num;
});

console.log(retults);
