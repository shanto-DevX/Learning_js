// for of
// for (variable of iterable){.......}

/* 
  |> for...of loop (জন্য...অফ লুপ)

  * এটি ইটারেটেবল অবজেক্টের মান (values) ইটারেট করে।
  * এটি মূলতঃ অ্যারে, সেট (sets), এবং স্ট্রিং এর মতো ইটারেটেবল অবজেক্টের উপর কাজ করে।
  * এটি লুপের প্রতিটি ইটারেশনে বর্তমান মানকে একটি ভেরিয়েবলে অ্যাসাইন করে।
  

  |> কখন for...of loop ব্যবহার করবেন:
  * আপনি যদি কোনো অ্যারে বা স্ট্রিং এর উপর লুপ চালিয়ে প্রতিটি উপাদানের মান অ্যাক্সেস করতে চান, তাহলে for...of loop ব্যবহার করাই সবচেয়ে কার্যকর।
  * for...of loop সুন্দর এবং সহজবোধ্য সিনট্যাক্স প্রদান করে।

*/

/* 
let peoples = ["Shanto", "sojib", "Nayem", "Tanvir", "jahid"];

for (let people of peoples) {
  //   console.log(people);
  console.log(people, peoples[people]);
} */

/* const text = "hello World";
for (const char of text) {
  console.log(char);
} */

/* const ary1 = ["a", "b", "c"];
for (let arrayIs in ary1) {
  console.log(arrayIs, ary1[arrayIs]);
} */

/* const num = [1, 2, 3, 4, 5, 6];
for (const nums of num) {
  // console.log(nums);
  console.log(num[nums]);
} */

const numx = [1, 2, 3, 4, 5, 6];
for (const nums of numx) {
  console.log(nums); //-> Print 1 to 6 |> Value
}
