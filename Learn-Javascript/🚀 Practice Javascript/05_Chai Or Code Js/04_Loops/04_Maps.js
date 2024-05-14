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

// console.log(map);

for (const [key, value] of map) {
  // for (const key of map) { -> Key & value in array
  console.log(key, " :- ");
} */

/* const myObje = {
  //   Game1: "NFS",
  //   Game2: "Call of Duty",
  Game1: "NFS",
  Game2: "Call of Duty",
};

for (const [Gkey, Gvalue] of myObje) {
  //   console.log(Gkey, " :- ", Gvalue);
} */

