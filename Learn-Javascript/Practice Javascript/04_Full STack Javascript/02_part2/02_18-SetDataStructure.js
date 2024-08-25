/* // Set is a built-in data structure introduced in (ES6) that represents a
collection of unique values. Unlike arrays, Set allows you to store only unique
values, which means duplicate values are automatically removed. Each value can
occur only once within a Set.
I
// Set objects are useful when you need to store a list of unique elements and
quickly check for the existence of a specific value. */

/*
 * collection of unique values |> ইউনিক ভেলু ষ্টোর করে এবং ডুপ্লিকেট ভেলু রিমোভ করে দেয়।
 */

// new Set()

/* const intialvalue = [1, 2, 3, 1];
const mySet = new Set(intialvalue);

console.log(mySet);
 */

// C:\Users\Saiful Islam Shanto\AppData\Local\Programs\Microsoft VS Code\resources\app\extensions\node_modules\typescript\lib\lib.es2015.collection.d.ts

/* let fruts = new Set();
fruts.add("Apple");
fruts.add("Orange");
fruts.add("Mango");
fruts.add("PineApple");
fruts.add("Apple");

for (let item of fruts) {
  console.log(item);
}

console.log(fruts); */

// * Clear All Set Data
// console.log(fruts.clear());

// * has Check True & False
// console.log(fruts.has("Apple"));
// console.log(fruts.has("Apples"));

// * delete for delete The value
// fruts.delete("PineApple");
// console.log(fruts);

// ==========================================

let challangeSet = new Set();
challangeSet.add("a");
challangeSet.add("b");
challangeSet.add("c");

for (let items of challangeSet) {
  console.log(items);
}

console.log(challangeSet);
console.log(challangeSet.keys());
