/* function firstLetterCapital(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
} */

function firstLetterCapital(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(firstLetterCapital("hello wolrd"));
console.log(firstLetterCapital("i love javascript"));
