// -> Split |> ভাগ করে ফেলে, একটি স্ট্রিং এ যদি (" স্পেস ") পায় তাহলে সেইটা স্পেস পেলেই ভাগ করে ফেলবে।

let str = "assalamu alikum. My Name Is. Saiful Islam SHanto";

let parts = str.split(" ");
let sentences = str.split(".");
let chars = str.split("");
// console.log(chars)

// -> Slice |>

let partial = str.slice(0, 8);
// console.log(partial)

// -> substr

let partial2 = str.substring(0, 8);
// console.log(partial2)

// -> at
let atMethod = str.at(5);
// console.log(atMethod)

// -> trim / trimStart / trimEnd

let hello = "   Hello World   ";
// console.log(hello.trim())
// console.log(hello.trimStart())
// console.log(hello.trimEnd())

// -> Concat

let str1 = "Hello ";
let str2 = "World";
let fullString = str1 + str2;
console.log(fullString);

// -> join

let ary = ["a", "b", "c", "D"];
let joinAry = ary.join(":");
console.log(joinAry);
