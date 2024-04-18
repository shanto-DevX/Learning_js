// => Json

const person = {
  name: "shanto",
  age: 24,
  email: "js@gmail.com",
  IsProgrammer: true,
  hobbies: ["Programming", "Designing", "Web"],
  address: {
    city: "Dhaka",
    Zone: "NarayanGonj",
  },
};

// => JSON.stringify() |> Convert json file to js

console.log(person);
// console.log(JSON.stringify(person));
// console.log(JSON.parse(person));

let stringObj = JSON.stringify(person);
let parseObj = JSON.parse(stringObj);
console.log(parseObj);
