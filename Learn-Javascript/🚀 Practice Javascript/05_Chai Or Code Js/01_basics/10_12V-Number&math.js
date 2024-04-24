// const score = 400;

/* 
    * New Number keyword দিয়ে Number নিলে এইটা অব্জেক্ট এর মধ্যে জমা হয়। 
    * number কে string এ কনভার্ট করলে string এর সব মেথড এখানে ব্যভহার করা যায়।
    * 
    * 
    * 
    
    |> Number methods

    * toFixed(value) => ২ ঘড় পর্যন্ত দেখাবে দশমিক এর পর (২০.০০)
    * toPrecision(value)
        -> 1 to 21 পর্যন্ত সাপোর্ট করে
        -> ভেলুকে string এ কনভার্ট করবে.
        -> 1234.4966 -> 1234 | 1234.8966 -> 1235 |> এইটা একটা নাম্বার কে রাউন্ডফিগার করে দেয়।
        -> 1234.4966 ==< toPrecision(3) >== 1.23e+3 ।> এখানে ৩ পর্যন্ত নিবে বাকি গুলো Exponential করে দিবে। 
    * toLocaleString
        -> এইটা ব্যবহার করে কমা(,) দেওয়া হয় 
        -> 1000000 ।> 10,00,000
        -> toLocaleString("bn-IN") -> ১০,০০,০০০
        -> toLocaleString("bn-IN") -> 10,00,000

*/

// const blance = new Number(100);
// console.log(blance);
// console.log(blance.toString());
// console.log(blance.toString().length);
// console.log(blance.toFixed(2));
// console.log(blance.toFixed(2));

// const newNumber = 1234.4966;
// console.log(newNumber.toPrecision(3));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("bn-IN"));
// console.log(hundreds.toLocaleString("en-IN"));

/* let num1 = Number.MAX_VALUE;
let num11 = Number.MAX_SAFE_INTEGER;
let num2 = Number.MIN_VALUE;
let num22 = Number.MIN_SAFE_INTEGER;
console.log(num1);
console.log(num11);
console.log(num2);
console.log(num22); */

// |> ++++++++++++++ Math ++++++++++++++++

/*
 *
 */

// console.log(Math);
// console.log(Math.PI.toFixed(4));
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(3, 2));
// console.log(Math.min(4, 3, 6, 2));
// console.log(Math.max(4, 3, 6, 2));

// console.log(Math.random());
// console.log(Math.random().toFixed(1) * 10 + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

let x = Math.floor(Math.random() * 20) + 1;
let y = Math.floor(Math.random() * 20) + 1;
let z = Math.floor(Math.random() * 20) + 1;
console.log(x);
console.log(y);
console.log(z);
