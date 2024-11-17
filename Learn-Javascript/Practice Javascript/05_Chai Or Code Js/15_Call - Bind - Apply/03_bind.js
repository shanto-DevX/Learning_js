const obj = { name: "john" };

let greeting = function (a, b) {
  return `${a} ${this.name}, ${b}`;
};

let bound = greeting.bind(obj);
console.log(bound("Hello", "How are you?"));
