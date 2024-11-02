console.log("HEllo 1");
console.log("HEllo 2");

setTimeout(() => {
  console.log("Hello 3");
}, 2000);

console.log("HEllo 4");

setTimeout(() => {
  console.log("Hello 5");
}, 2000);

setTimeout(() => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}, 2000);
