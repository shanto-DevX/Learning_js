/*
 *Parameter :- যেখানে ভেরিএবল এর মধ্যে ডাটা ষ্টোর হয়
 * arguments :- যেখানে ভেলু দেওয়া হয়।
 */

/* function sum(a, b) {
  //*Parameter
  return a * b;
}

var x = sum(10, 20); // * arguments
console.log(x); */

// ----------------------------

// -> Var function Scoped
// -> var নিজের পেরেন্ট ফাংশন এর মধ্যে যেকোন জাগায় ব্যবহার করা যায়।
/*
 * এখানে লুপ এর মধ্যে ১ থেকে ১১ প্রিন্ট হবে এবং বাহিরের i সহ প্রিন্ট হবে
 */

/* function abcd() {
  for (var i = 1; i < 12; i++) {
    console.log(i);
  }
  console.log(i);
}

abcd(); */

// **************************************
// -> Let Braces Scoped
// -> let ব্রেকেট এর মধ্যে কাজ করে

/*
 * এখানে লুপ এর মধ্যে ১ থেকে ১১ প্রিন্ট হবে এবং বাহিরের i সহ প্রিন্ট হবে না কারন Let ব্রেকেট এর মধ্যে কাজ করে থাকে
 */

function abcd() {
  for (let i = 1; i < 12; i++) {
    console.log(i);
  }
  console.log(i);
}

abcd();
