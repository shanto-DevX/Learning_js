// const prompt = require("prompt-sync")({ sigint: true });

/* const numberInput = parseInt(prompt("Enter the number of Terms : "));

let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");

for (let i = 1; i <= numberInput; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
} */

// -> Fibonacci Series

// function fibo(num) {}

const fibo = [0, 1];
let num = 15;
for (let i = 2; i <= num; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);
