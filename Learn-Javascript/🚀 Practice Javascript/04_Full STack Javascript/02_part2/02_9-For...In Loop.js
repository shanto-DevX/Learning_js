// |> For in Loop

/* 
  |> for...in loop (জন্য...ইন লুপ)

  * এটি অবজেক্টের প্রপার্টির নাম (property names) ইটারেট করে।
  * এটি অ্যারে-সদৃশ অবজেক্টেও কাজ করে (যেমন String), কিন্তু ইনডেক্স (index) নয়, প্রপার্টির নামই দেয়।
  * এটি লুপের প্রতিটি ইটারেশনে (iteration) বর্তমান প্রপার্টির নামকে একটি ভেরিয়েবলে (variable) অ্যাসাইন করে।
   
  |> কখন for...in loop ব্যবহার করবেন:
  * আপনি যদি কোনো অজানা অবজেক্টের প্রপার্টিগুলো লুপের মাধ্যমে ঘুরে দেখতে চান এবং তাদের মানের প্রয়োজন নেই, তাহলে for...in loop ব্যবহার করতে পারেন।
  * তবে, সাবধান! for...in loop উত্তরাধিকারসূত্রে প্রাপ্ত (inherited) প্রপার্টিগুলোও ইটারেট করে, তাই সর্বদা এটিই সেরা পছন্দ নাও হতে পারে।

*/

/* let x = [1, 2, 3, 4, 5];
// => for(let keys in value )
for (let xyz in x) {
  // console.log(x[xyz]); |> access value
  // console.log(xyz); |> access Index
} */

/* let obj = {
  nameIs: "shanto",
  ageIs: 24,
};

for (let keys in obj) {
  console.log(keys, obj[keys]);
} */

/* const obj = { a: 1, b: 2, c: 3 };
for (keys in obj) {
  console.log(keys, obj[keys]);
} */

/* const num = [1, 2, 3, 4, 5, 6];
for (const nums in num) {
  // console.log(nums);
  console.log(nums); //-> Print 0 to 5 |> Index
} */
