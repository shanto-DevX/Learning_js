/* const obj = { name: "shanto" };

let greeting = function (a, b) {
  return `${a} ${this.name}, ${b}`;
};

console.log(greeting.apply(obj, ["Hello", "How Are you?"])); */

// ===================================================

const numbers = [1, 2, 3, 4, 5];
console.log(Math.max.apply(null, numbers));
