// https://youtu.be/H3XIJYEPdus?si=sr9sex59aZtvMdHB&t=23057
/* 
3. forEach loop (ফরএচ লুপ)

*এটি একটি অ্যারে মেথড যা অ্যারের প্রতিটি উপাদানের উপর একটি ক্যালব্যাক ফাংশন (callback function) কল করে।
*ক্যালব্যাক ফাংশনটি লুপের প্রতিটি ইটারেশনে মান (value), ইনডেক্স (index) (ঐচ্ছিক), এবং পুরো অ্যারে (optional - the entire array) - এই তিনটি আর্গুমেন্ট নেয়।
*forEach loop নিজেই কোনো মান ফেরত দেয় না।

|> কখন forEach loop ব্যবহার করবেন:

* আপনি যদি কোনো অ্যারের উপর লুপ চালিয়ে প্রতিটি উপাদানের সাথে কিছু কাজ করতে চান, তাহলে forEach loop একটি ভালো পছন্দ।
* forEach loop এর সুবিধা হলো এটি সহজেই পড়া যায় এবং কম কোড লিখতে হয়।

*/

/* 
let x = [4, 5, 6, 9, 8, 7, 4, 5, 5, 1, 4, 1];

x.forEach(function (num, index) {
  console.log(index, "=>", num);
});
// |> Value, index
x.forEach(function (num, index) {
  console.log(num, index);
}); 

*/

// const colors = ["Red", "Blue", "Yellow", "Green", "Pink", "Violate"];

/* for (var i = 0; i < colors.length; i++) {
  console.log(i, colors[i]);
} */

/* colors.forEach((val, index) => {
  console.log(val, index);
}); */

/* const colors = ["Red", "Blue", "Yellow", "Green", "Pink", "Violate"];

// colors.forEach((color, index) => console.log(index, color));

colors.forEach(function (x) {
  console.log(x);
}); */

/* const words = ["hello", "bird", "table", "football"];
const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words); */

/* let numAray = [1, 2, 4, 5, 6, 8];
let sum = 0;

function adder(number) {
  sum += number;
}

numAray.forEach(adder);
console.log(sum); */

let numAray = [1, 2, 4, 5, 6, 8];
let sum = 0;

function adder(x) {
  sum += x;
}

numAray.forEach(adder);
console.log(numAray);
console.log(sum);
