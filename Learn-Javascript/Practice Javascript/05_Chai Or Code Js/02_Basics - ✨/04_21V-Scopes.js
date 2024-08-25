/* 
    * scopes

    |> Global Scopes
    |> Local Scopes

    * {Scopes}

    * {Block Scopes} ঃ- Block Scope এর মধ্যে যেইটা লেখা হবে সেইটা Block এর বাহিরে এক্সেস করা যাবে না।

    * Global Scope {Block Scopes} :- Global scope এ কিছু লিখলে সেইটা Block Scope এ এক্সেস করা যাবে।


    // => Hoisting
    // => clouser

*/

/* let a = 300;
const b = 200;

if (true) {
  let a = 10;
  console.log("Block Scope : ", a);
}

console.log("Global Scope : ", a);
console.log("Global Scope : ", b); */

// ===============================================
// | Scope level and mini hoisting in javascript |
// ===============================================

// -> Nested Scope

/* 
    * এখানে অনেকটা এইভাবে কাজ করে, ছোটরা বড়দের থেকে কিছু চাইলে সেইটা নিতে পারে, কিন্তু বড়রা ছোটদের থেকে কিছু চাইলে সেইতা নিতে পারে না 😂😂😂

    * এখানে one() ফাংশন এর মধ্যে userName ডিক্লিয়ার করা হইছে, এবং সেইটা two() ফাংশন এর মধ্যে প্রিন্ট করা হইছে। -> প্রিন্ট হবে যদি two() ফাংশন (console.log)কল করা হয়।

    * two() ফাংশন এর মধ্যে website ডিক্লিয়ার করা হইছে কিন্তু কল করা হইছে ফাংশন এর বাহিরে one() এর মধ্যে, এখানে রান হবে না কারন two() ফাংশন ব্লক {} এর মধ্যেই  website (console.log)কল করতে হবে। 
*/

/* function one() {
  const userName = "Shanto";

  function two() {
    const website = "shanto.studio";
    console.log(userName);
    console.log(website);
  }

  two();
}

one(); */

/* if (true) {
  const userName = "Shanto";
  if (userName === "Shanto") {
    const website = " Shanto.studio";
    console.log(userName + website);
  }
  console.log(website);
} */

// +++++++++++++++++++++++++++++++++++++++++
// -> Intracting

// -> Normal Function
// console.log(addOne(5)); -> also can declear avobe the function
function addOne(value) {
  return value + 1;
}

console.log(addOne(5));

// -> Function Expreations
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));
