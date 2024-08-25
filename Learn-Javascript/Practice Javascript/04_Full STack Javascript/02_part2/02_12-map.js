// map

/* let number = [1, 2, 4, 5, 6, 7];
// let double = number.map((num) => num * 2);
let double = number.forEach((num) => {
  console.log((num = num * 2));
});
// console.log(double); */
/* 
let number = [1, 2, 4, 5, 6, 7];
let double = number.map((number) => number * 2);
console.log(double); */

let people = [
  {
    firstName: "Saiful Islam",
    lastName: "Shanto",
  },
  {
    firstName: " Islam",
    lastName: "Shao",
  },
  {
    firstName: "Saif Islam",
    lastName: "Snto",
  },
];

const result = people.map((person) => {
  return [person.firstName, person.lastName];
});

console.log(result);

/* let num = [1, 2, 5, 4, 5, 7, 8, 9];
// let multiPlay = num.map((num) => num * 10);
function multi(numbers) {
  return numbers * 10;
}

let newAray = num.map(multi);
console.log(newAray); */

/* const numbers = [1, 2, 3, 4, 5, 6];
const num = numbers.map((number) => {
  return number * 2;
});

console.log(num); */

/* const numbers = [1, 2, 3, 4, 5, 6];
const doubleNumber = numbers.map(function (number) {
  return number * 2;
});
const TripleNumber = numbers.map(function (number) {
  return number * 3;
});

console.log(numbers);
console.log(doubleNumber);
console.log(TripleNumber); */

const objIs = [
  { NameIs: "Shanto", AgeIs: 24, Hobbay: "Programming" },
  { NameIs: "X", AgeIs: 20, Hobbay: "ZZZZ" },
];
/* const newObj = objIs.map(function (newObjs) {
  return [newObjs.NameIs, newObjs.AgeIs, newObjs.Hobbay];
}); */
const newObj = objIs.map((newObjs) => {
  return [newObjs.NameIs, newObjs.AgeIs, newObjs.Hobbay];
});

console.log(newObj);
