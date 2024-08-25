/*
 * Find Methods
 * array এর মধ্যে কোন এলিমেন্ট খুজতে হলে Find Method ব্যবহার হয়।
 * Find Method ব্যবহার কোন এলিমেন্ট খোজা হলে সেখানে যদি একি এলিমেন্ট একের অধিকবার থাকে তাহলে সে প্রথম যেই এলিমেন্ট টা আছে সেইটা দেখাবে।
 */

/* const peoples = [
  { name: "Shanto", age: 17 },
  { name: "Hojn", age: 18 },
  { name: "alex", age: 20 },
  { name: "jimmt", age: 28 },
  { name: "alex", age: 30 },
];

let res = peoples.find((person) => person.name === "alex");
console.log(res); */

/* const postes = [
  { id: 1, content: "Hello World" },
  { id: 2, content: "bunjay World" },
  { id: 3, content: "hola World" },
  { id: 4, content: "Hello World" },
];

// const res = postes.find((post) => post.content === "Hello World");
const res = postes.filter((post) => post.content === "Hello World");
console.log(res); */

/* const ages = [3, 10, 18, 20];
const res = ages.find((age) => age > 18);
console.log(res); */

let products = [
  { name: "chekers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "computer", category: "Electornics" },
  { name: "Lean js", category: "Books" },
];

// let res = products.find((product) => product.category === "Books");
let res = products.filter((product) => product.category === "Books");
console.log(res);

/* let product;
for (let i = 0; i < products.length; i++) {
  if (products[i].category === "Books") {
    product = products[i];
    break;
  }
}
console.log(product); */
