// * ১. array এর কিছু জিনিস আমরা অলরেডি জানি। index, length, push, pop

/* let ary = [10, 20, 30, 40, 50];

console.log(ary.indexOf(20));
console.log(ary.length);
ary.push(200)
console.log(ary);
ary.pop(200);
ary.pop();
console.log(ary); */

// ২. for লুপ বা for of লুপ দিয়ে array এর সব উপাদান এর উপরে লুপ চালানো যায়।

/* let ary = [10, 20, 30, 40, 50];
for (let i = 0; i < ary.length; i++) {
  console.log(i, ary[i]);
} */

// ৩. array এর মধ্যে কোন উপাদান খুঁজতে চাইলে তুমি array এর মধ্যে indexOf দিয়ে index চেক করতে পারো
// let ary = [10, 20, 30, 40, 50];
// let findInAry = ary.indexOf(50)
// console.log(findInAry)

// ৪. এইবার array এর মধ্যে এক উপাদান আছে কিনা সেটা includes দিয়েও চেক করতে পারো

// let ary = [10, 20, 30, 40, 50];
// let checkInAry = ary.includes(50);
// console.log(checkInAry);

// ৫. এছাড়াও array এর ছোট একটা অংশ বের করার জন্য slice, splice ইউজ করতে পারো

// slice
/* let ary = [10, 20, 30, 40, 50];
// ary.shift(1,4)
ary.splice(1,4)
console.log(ary); */

// splice;

/* let ary = [10, 20, 30, 40, 50];
// let result = ary.splice(1, 2, 60, 70, 80);
let result = ary.splice(-1, 2, 60, 70, 80);
console.log(ary);
console.log(result); */

// * ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।

/* function areaOfTriangle(a, b, h) {
  let a = (b * h) / 2;
  return console.log(a);
}
areaOfTriangle(0, 10,20); */

// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।

let x = 5

if (x<1){
  console.log(x + " is not prime number")
}else if(x>1){
  for(let i = 0; )
}