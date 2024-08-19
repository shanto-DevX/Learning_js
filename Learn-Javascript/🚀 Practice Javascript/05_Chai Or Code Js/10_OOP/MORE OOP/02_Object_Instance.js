// -> Object Instance

/*
 * new keyword - Optional
 */

// let person =  Object();
let person = new Object();
person.firstName = "Saiful islam";
person.lastName = " Shanto";
person.city = " Narayanganj";
person.isLogin = true;
person.getName = () => {
  return `my Name is ${person.firstName} ${person.lastName}`;
};

console.log(person.firstName + person.lastName);
console.log(person.getName());
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
