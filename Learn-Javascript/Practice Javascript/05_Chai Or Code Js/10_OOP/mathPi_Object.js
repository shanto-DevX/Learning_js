/*
 * getOwnPropertyDescriptor কিছু হিডেন মেথড ও দেখাবে!
 * Object এ আইটারেট বন্ধ করে রাখা যায়।
 */

// * => Math.PI show same value after OverRide The Value
/* console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); */

//* => ওব্জেক্ট এর প্রপার্টি এর কি কি পরিবর্তন করা যাবে সেইগুলো যানা যায়, getOwnPropertyDescriptor এই মেথড ব্যবহার করে।
const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(Descriptor);

/* 
    {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
    }

    এইখানে Math.PI এর ভেল্যু হার্ডকোড করে রাখা আছে সি++ দিয়ে, তাই এই কোডে ভেল্যু চেঞ্জ করা যাবে না।
*/

const users = {
  userName: "shanto",
  id: "124",
  isStudent: true,

  sayHello: function () {
    console.log("Hello");
  },
};

/* 
{
    value: 'shanto',
    writable: true,
    enumerable: true,
    configurable: true
    }
*/

// -> users এ কি কি এভাইলেবেল সেইটা চেক করা হয়েছে
console.log(Object.getOwnPropertyDescriptor(users, "userName"));

Object.defineProperty(users, "id", {
  //   writable: false,
  // -> enumerable false এর ফলে "id" তে লুপ চলবে না
  // -> enumerable true এর ফলে "id" তে লুপ চলবে
  enumerable: true,
  //   configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(users, "id"));

// |> Object এর মধ্যে এমনিতে লুপ চালানো যায়না, কখনো কখনো।
/* for (let [key, value] of users) {
  console.log(`${key}, ${value}`);
} */

// |> Object এ লুপ চালানো  হলে এভাবে চালাতে হয়।
/* for (let [key, value] of Object.entries(users)) {
  console.log(`${key}, ${value}`);
} */

// |> Object এর মধ্যে ফাংশন আছে, কিন্তু চাচ্ছি সুধু key, value আসুক
for (let [key, value] of Object.entries(users)) {
  if (typeof value !== "function") {
    console.log(`${key}, ${value}`);
  }
}
