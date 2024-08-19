/* 
    -> maps
    * Same Data নেয় না। এইটা শুরু ইউনিক ডাটা ষ্টোর করে।
    * The for..of loop only supports iterable objects like arrays, not objects.

    * Map এর মধ্যে key, value আলাদা প্রিন্ট করতে চাইলে, 
    -> for (const key, value of map) :- array হিসেবে প্রিন্ট হবে
    -> for (const [key, value] of map) :- নারমাল ভাবে প্রিন্ট হবে, আলাদা হয়ে। 

    * -> সাধারন Object  for..of loop দিয়ে iterate করা যায়না। 
*/

/* const map = new Map();

// -> Set Value
map.set("Country", "Bangladesh");
map.set("City", "Dhaka");
map.set("State", "Narayanganj");
map.set("City", "Dhaka");

console.log(map);

for (const [key, value] of map) {
  for (const key of map) {
    //-> Key & value in array
    console.log(key, " :- ");
  }
} */

/* 
|> Error
const myObje = {
  //   Game1: "NFS",
  //   Game2: "Call of Duty",
  Game1: "NFS",
  Game2: "Call of Duty",
};

for (const [Gkey, Gvalue] of myObje) {
  console.log(Gkey, " :- ", Gvalue);
} */

// -----------------------

let officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

/* for (const key of officers) {
  console.log(key.id);
} */

let officersId = officers.map(function (e) {
  return e.id;
});

/* let officersId = officers.map((officers) => officers.id); */

console.log(officersId.length);

/* 
-> So how does .map() work? Basically is takes 2 arguments, a callback and an optional context (will be considered as this in the callback) which I did not use in the previous example. The callback runs for each value in the array and returns each new value in the resulting array.

-> Keep in mind that the resulting array will always be the same length as the original array.
*/
