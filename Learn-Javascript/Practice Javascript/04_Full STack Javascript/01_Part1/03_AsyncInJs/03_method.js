/* function greet() {
  return `Hello, my Name is ${person.name} & I'm a ${person.age} year old`;
}

const person = {
  name: "shanto",
  age: 24,
  greet,
};

console.log(person.greet()); */
// ---------------------------------------------

const person = {
  nameIs: "Shanto",
  ageIs: 24,
  greet: function () {
    return `Hello, my Name is ${person.nameIs} & I'm a ${person.ageIs} year old`;
  },
};

console.log(person.greet());
