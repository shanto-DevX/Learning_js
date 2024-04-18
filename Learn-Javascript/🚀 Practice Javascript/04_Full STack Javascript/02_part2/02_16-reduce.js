/* 
    -> Reduce()
    * The reduce() method applies the reducer function to each element of an array, accumulating the results into a single value. It is often used to perform calculations or aggregations on array elements and simplify the array into a single value.
*/

/* const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.reduce((p, c) => {
  console.log(`Pervious: ${p}`);
  console.log(`Current: ${c}`);
  return p + c;
}, 0);

console.log(sum); */

/* const peoples = [
  {
    name: "saiful Islam Shanto",
    age: 24,
  },
  {
    name: "saiful Islam",
    age: 23,
  },
  {
    name: "saiful",
    age: 21,
  },
];

const res = peoples.reduce((p, c) => (c.age > p ? c.age : p), 0);

console.log(res); */

/* const fruts = ["Apple", "Orange", "Banana", "Orange", "Apple", "Banana"];
const wordFrequency = fruts.reduce((frequencyMap, word) => {
  frequencyMap[word] = frequencyMap || 0 + 1;
  return frequencyMap;
}, {});
console.log(wordFrequency); */

/* const arr = [1, 2, 3, 4, 5];
const reduced = arr.reduce((total, current) => total + current);
console.log(reduced); */

// const arr = [2, 3, 4, 5];
// const mulOfArray = arr.reduce((total, current) => total * current);
/* const mulOfArray = arr.reduce((total, current) => {
  return total * current;
}); */

/* function calculateProduct(arrIs) {
  const x = arrIs.reduce((total, current) => {
    return total * current;
  });
  return x;
}

console.log(calculateProduct(arr)); */

// =====================================================================

/* let num = [1, 2, 4, 3, 5, 8];
let duboleArray = num.reduce((prev, current) => {
  console.log(`Prev: ${prev}`);
  console.log(`Current: ${current}`);
  return prev * current;
});

console.log(duboleArray); */

/* let num = [1, 2, 4, 3, 5, 8];
let result = num.reduce((prevValue, currentValue, currentIndex, mainArray) => {
  console.log(`Prev: ${prevValue}`);
  console.log(`Current: ${currentValue}`);
  console.log(`currentIndex: ${currentIndex}`);
  console.log(`mainArray: ${mainArray}`);
  console.log(`------------------------`);
  return prevValue + currentValue;
}, 0);

console.log("Total Sum IS :" + result); */

/*
 * array reduce method
 * -> এই মেথড মূল array কে পরিবর্তন করে না
 * -> এইটা কাজ করেঃ prevValue, currentValue, currentIndex, mainArray নিয়ে
 * -> একটা এনিন্মাস বা এরো ফাংশন নেয় এবং সেইটার মধ্যে কাজ করে।
 */

/* 
|> ক্যালব্যাক ফাংশনের আর্গুমেন্ট:
* ক্যালব্যাক ফাংশনটি সাধারণত চারটি আর্গুমেন্ট নিয়ে থাকে:

* accumulator (acc): এটি একটি অ্যাকিউমুলেটর ভেরিয়েবল, যা পূর্ববর্তী * ইটারেশনের ফলাফল ধরে রাখে। প্রথম ইটারেশনে এটি সাধারণত অ্যারের প্রথম * উপাদান হয়, তবে আপনি এটিকে একটি প্রारমিক মান সেট করতে পারেন।
* current value (cur): এটি অ্যারের বর্তমান ইটারেশনের মান।
* current index (idx): এটি অ্যারের বর্তমান ইটারেশনের ইনডেক্স। (ঐচ্ছিক)
* source array (src): এটি মূল অ্যারে। (ঐচ্ছিক)

 */

/* function totalArr(arr) {
  let x = arr.reduce((P, C) => {
    return P + C;
  });
  return x;
}

let arrayIs = [1, 2, 3];
let result = totalArr(arrayIs);
console.log(result); */

/* function StringConCat(arr) {
  let x = arr.reduce((P, C) => {
    return P + String(C);
  });
  return x;
}

let arrayIs = [1, 2, 3];
let result = StringConCat(arrayIs);
console.log(result); */

/* function arrayConcat(arr) {
  let arrConcat = arr.reduce((p, c) => {
    return p + String(c);
  });

  return arrConcat;
}

let arrayIs = [1, 2, 3, 4, 5];
console.log(arrayConcat(arrayIs));
console.log(typeof arrayConcat(arrayIs)); */

/* function checkLength(word) {
  return word.length > 6;
}
console.log(words.filter(checkLength)); 
 */

/* 
  * count: The accumulator variable (initialized to 0).
  * value: The current element of the array. 
 |>return arr.filter((people) => people.voted == true).length;

*/

/* function totalVotes(arr) {
  // return arr.reduce(
  //   (count, value) => (value.voted === true ? count + 1 : count),
  //   0
  // );

  return arr.filter((p) => p.voted === true).length;
  // return arr.reduce((p, c) => (c.voted === true ? p + 1 : p), 0);
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); */

/* function shoppingSpree(arr) {
  // let result = arr.reduce((P, C) => P + C.price, 0);
  let result = arr.reduce((p, c) => p + c.price, 0);
  return result;
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005
 */

/* function flatten(arr) {
  // let x = arr.reduce((p, c) => p.concat(c), []);
  let x = arr.reduce((p, c) => p.concat(c), []);
  return x;
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); */
