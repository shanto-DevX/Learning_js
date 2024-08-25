// * -> Destructuring allows us to "Unpack" values from data-structure (arrays,objects) into separate distinct variables

// |> এখানে কোন arrays,objects তেরি করলে সেইটার একটা ইনডেক্স নাম্বার থাকে, এখন সেইটাকে Destructuring করে [] এর মধ্যে একটি ভেরিএবল ডিক্লিয়ার করা হয় এবং ভেরিএবল এর মান থাকে arrays,objects এ। এখন ভেরিএবল এর নাম প্রিন্ট করলে ইনডেক্স অনুযাই আসবে বা প্রিন্ট হবে।

// |> Destructuring with arrays

/* const food = ["banana", "Mango", "olive"];

const [x, y, z, aa] = food;
console.log(x);
console.log(y);
console.log(z);
console.log(aa); */

/* let a, b;
//* এখানে a, b তে ভেলু দিয়ে দেওয়া হইছে এবং মান ষ্টোর করা হইছে [1] এখন যদি a প্রিন্ট করা হয় তখন 1 দেখাবে, এবং b প্রিন্ট করা হয় তখন 8 দেখাবে কারন এখানে 8 ডিফ্লট দেওয়া ও দ্বিতীয় কোন ভেলু মানে ষ্টোর করা হয়নাই।
[a = 5, b = 8, c] = [1];
console.log(a);
console.log(b);
console.log(c); */

/*
|> destructure with spreed Opearator 
const person = ["Shanto", "liza", "xyz", "aZa", "MYN"];
const [Name1, Name2, Name3, ...others] = person;
console.log(Name1);
console.log(Name2);
console.log(Name3);
console.log(others); */

/* // |> Deafult Value
const arr = [undefined, "pizaa", "barger"];
const [a = "rice", b, c] = arr;
console.log(a, b, c); */

// |> array in Function
/* function f() {
  return [1, 2];
}

let a, b;
[a, b] = f(); //-> [1, 2] ষ্টোর করা হয়েছে  [a, b] এর মধ্যে

console.log(a);
console.log(b); */

/* function num() {
  return [1, 2, 3];
}

// -> এখানে array এর সেকেন্ড ইন্ডেক্স কে স্কিপ করা হইছে। 
const [a, , b] = num();
console.log(a);
console.log(b); */

/* function numIS() {
  //   return [1, 2, 3];
  return [1, 2, 3, 4, 5, 6, 7, 8];
}

// const [a, b, c] = numIS();
//* console.log(a, b, c);
// const [a, b, c, ...others] = numIS();
//* console.log(a, b, c, others);
// const [a, , b, , c, , d, , e] = numIS();
//* console.log(a, b, c, d); //1 3 5 7 */

// |> Assigning the rest of an array to a variable

/* const [a, ...b] = ["one", "two", "three", true, 124];
console.log(a, b); */

// => Challange
/* const colors = ["red", "green", "blue", "yellow", "orange"];
const [c1, c2, c3] = colors;
console.log(c1, c2, c3);

const [x1, x2, x3, ...x] = colors;
console.log(x1, x2, x3, x); */

/* function colorsName() {
  return ["red", "green", "blue", "yellow", "orange"];
}

const [c1, c2, c3] = colorsName();
const [x1, x2, x3, ...x] = colorsName();
console.log(c1, c2, c3);
console.log(x1, x2, x3, x);
console.log(x, x1, x2, x3); */

// |> OBJECTs
/*
 * OBJECTs Destructure এর মধ্যে {ব্রেকেট থাকবে} এবং এখানে OBJECTs ভেরিএবল এর নাম এবং Destructure ভেরিএবল এর নাম একি থাকতে হবে।
 */

/* const obj = {
  food1: "Banana",
  food2: "apple",
  food3: "orange",
};


const { food1, food2, food3 } = obj;
console.log(food1, food2, food3); */

/* const personInfo = {
  name: "Shanto",
  age: 24,
  gender: "Male",
  country: "Bangladesh",
};

const { name, age, gender, country } = personInfo;
console.log(name, age, gender, country); */

// -> Renaming variable
// * only avilabel In Object

/* const num = {
  x: 100,
  y: 200,
};

// const { x, y } = num;
// console.log(x, y);

const { x: num1, y: num2 } = num; //* Renaming variable
console.log(num1, num2); */

// -> Object destructuring and rest Operator

/* const { a, b, c, ...d } = { a: 100, b: 200, c: 300, d: 400, e: 500 };

console.log(a, b, c, d);
console.log(d); */

/* const personInfo = {
  name: "Shanto",
  age: 24,
  gender: "Male",
  country: "Bangladesh",
};

const {
  name: personName,
  age: personAge,
  gender: personGender,
  country,
} = personInfo;

console.log(personName);
console.log(personAge);
console.log(personGender);
console.log(country); */

// => Function Destructuring
// |> https://youtu.be/H3XIJYEPdus?si=XDo9_1Kmr1RPe9va&t=21351

/* const person = {
  nameIs: "Shanto",
  age: 24,
  location: "Bangladesh",
};

// => Before Destructuring
function printPersonInfo(person) {
  console.log(`Name: ${person.nameIs}`);
  console.log(`age: ${person.age}`);
  console.log(`location: ${person.location}`);
}

// => After Destructuring
function printPersonInfo({ nameIs, age, location }) {
  console.log(`Name: ${nameIs}`);
  console.log(`age: ${age}`);
  console.log(`location: ${location}`);
}

printPersonInfo(person); */

/* let options = {
  title: "My menu",
  items: ["item1", "item2"],
};

function showMenu({
  title,
  width: w = 100,
  height: h = 200,
  items: [item1, item2],
}) {
  console.log(`${title},${w},${h}`);
  console.log(item1);
  console.log(item2);
}

console.log(options); */

// |> Nested Destructure

/* const personInfo = [
  {
    id: 1,
    nameIs: "Shanto",
    ageIs: 24,
    location: "Bangladesh",
    Profetion: "Desinger & Developer",
  },
  {
    id: 2,
    nameIs: "sojib",
    ageIs: 25,
    location: "Bangladesh",
    Profetion: "Web Developer",
  },
  {
    id: 3,
    nameIs: "Nayem",
    ageIs: 26,
    location: "Bangladesh",
    Profetion: "UI UX Desinger",
  },
  {
    id: 4,
    nameIs: "Tanvir",
    ageIs: 27,
    location: "Bangladesh",
    Profetion: "Desinger",
  },
  {
    id: 5,
    nameIs: "Jahid",
    ageIs: 22,
    location: "Bangladesh",
    Profetion: "Js Developer",
  },
];

// |> Access Nested Destructure
// const [{ nameIs, ageIs, location, Profetion }] = personInfo; => index 1
// const [,{ nameIs, ageIs, location, Profetion }] = personInfo; => index 2
// const [, , { nameIs, ageIs, location, Profetion }] = personInfo; => index 3
// const [, , , { nameIs, ageIs, location, Profetion }] = personInfo; => index 4
// const [, , , , { nameIs, ageIs, location, Profetion }] = personInfo; => index 5

// console.log(nameIs, ageIs, location, Profetion);

// |>Access spcafic Index Nested Destructure

const [, , , { id, nameIs, Profetion }] = personInfo;
console.log(id, nameIs, Profetion); */

// |> Destructure Mixture



























//* =================================================================
// |> Practicing Destructure

/* let X = [1, 2, 3, 4, 5];
// let [x, y, z] = x;
let [x, y, z, ...others] = X;
console.log(x, y, z, others); */

/* let personInfo = {
  nameIs: "Shanto",
  ageIs: 24,
  location: "Bangladesh",
};

let { nameIs, ageIs: age, location } = personInfo;
console.log(personInfo);
console.log(nameIs, (age = 25), location); */

/* let personInfo = {
  nameIs: "Shanto",
  ageIs: 24,
  location: "Bangladesh",
};

function showInfo({ nameIs, ageIs, location }) {
  console.log(`Name IS : ${nameIs}`);
  console.log(`Age IS : ${ageIs}`);
  console.log(`Location IS : ${location}`);
}

function showInfo({
  nameIs: name,
  ageIs: age,
  location,
  hobby = "Programming",
}) {
  console.log(`Name IS : ${name}`);
  console.log(`Age IS : ${age}`);
  console.log(`Location IS : ${location}`);
  console.log(`hobbay IS : ${hobby}`);
}

showInfo(personInfo); */

// https://www.freecodecamp.org/news/destructuring-patterns-javascript-arrays-and-objects/
