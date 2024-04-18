var foods = ["apple", "rice", "Water", "vagitable"];
// console.log(foods[0]);

// -> Itarent all Array Elements

/* for (var i = 0; i < foods.length; i++) {
  console.log(i, foods[i]);
} */

// -> push
// foods.push("Kacchi");
// console.log(foods);

// -> pop
// foods.pop("Kacchi");
// console.log(foods);

// -> shift : Remove First
// foods.shift();
// console.log(foods);

// -> unshift : add first
/* foods.unshift("Kacchis");
console.log(foods); */

// -> splice : Remove any items
// foods.splice(2, 1);
foods.splice(2, 2);
console.log(foods);
