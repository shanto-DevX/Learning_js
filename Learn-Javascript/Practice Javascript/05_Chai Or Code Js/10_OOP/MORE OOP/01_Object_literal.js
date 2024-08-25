//
let myOBJ = {
  firstName: "Saiful Islam",
  lastName: "Shanto",
  age: 24,
  learning: "Javascript",

  getFUllName: () => {
    return `my Full Name Is ${myOBJ.firstName} ${myOBJ.lastName}`;
  },
};

console.log(myOBJ);
console.log(JSON.stringify(myOBJ));
console.log(myOBJ.getFUllName());
