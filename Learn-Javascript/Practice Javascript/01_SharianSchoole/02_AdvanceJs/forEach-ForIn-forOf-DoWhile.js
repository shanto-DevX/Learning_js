/* 
    -> for each
    -> for in
    -> for of
    -> do-while
*/

// * -> for each run only array
// * -> forEach এর মধ্যে কোন array এর ভেলু মডিফাই করেলে সেইটা মেইন array তে চেঞ্জ হয়না, forEach এর মধ্যে টেম্পোরারি ভাবে ষ্টোর থাকে।

// var ary = [1, 2, 3, 5, 8, 7, 9, 5, 9, 4, 9];

//anonymosFunction
/* ary.forEach(function (val) {
  console.log(val + 2);
}); */

// for (let i = 0; i < ary.length; i++) {
//   for (let x = 0; x < i; x++) {
//     console.log(x);
//   }
// }

// -------------------------------------------------------

// * -> For In Loop
// * Object এর মধ্যে লুপ চালানোর জন্য forin Loop ব্যবহার করা হয়।

/* var obj = {
  name: "Shanto",
  age: 24,
  city: "Dhaka",
};

for (var key in obj) {
  console.log(key, obj[key]);
} */

// -> Do while

var a = 12;

do {
  console.log(a);
  a++;
} while (a < 20);
