// let myName = "Shanto     ";
// console.log(myName.trim().length);
// console.log(myName.trueLenght());

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderMan: "sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is ${this.spiderMan}`);
  },
};

// -> এখন চাচ্ছি, অব্জেক্ট এর মধ্যে একটা মেথড এড করতে। heroPower.shanto()

// |> Object এর হায়ার Parent এর কাছে  shanto অব্জেক্ট তেরি হয়ে গেছে এখন এইটা function / array / string এর মধ্যে এক্সেস করা যাবে।

Object.prototype.shanto = function () {
  console.log("Shanto is present in all object");
};

// -> array এর মধ্যে আলাদা মেথড তেরি করা হইয়েছে এবং এইটা অন্য অজেক্ট / ফাংশন এ কাজ করবে না। সুধু array তে কাজ করবে।
Array.prototype.heyShanto = function () {
  console.log(`shanto say hello `);
};
// heroPower.shanto();
// myHeros.shanto();
// myHeros.heyShanto();
// heroPower.heyShanto(); => Error

// ----------------------------

// => Inheritance
/*
 * prototypical Inheritance হচ্ছে, একটা অব্জেক্ট থেকে অন্য অব্জেক্ট এ ডাটা পাওয়ার মাধ্যম। 
        |> OLD syntext: __proto__ : ObjectName
        |> modern syntext: Object.setPrototypeOf(x,y)
 */

const user = {
  name: "shanto",
  email: "shanto@google.com",
};
const Teacher = {
  makevideo: true,
};

const TeachingSUpport = {
  isAvailablee: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSUpport,
};

Teacher.__proto__ = user;

// modern Syntax
/*
 * hasOwnProperty
 * isPrototypeOf
 * propertyIsEnumerable
 * setPrototypeOf
 */

Object.setPrototypeOf(TeachingSUpport, Teacher);

// -> create a method for string
let anotherName = "shanto    ";
String.prototype.trueLenght = function () {
  console.log(`${this}`);
  console.log(`True lenght is: ${this.trim().length}`);
};

anotherName.trueLenght();
"hello   ".trueLenght();
