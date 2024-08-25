/* let x = [1, 2, 3, 4, 5, 6];
let y = x.reverse();
console.log(y); */

let x = [1, 2, 3, 4, 5, 6];
let revArray = [];
for (let i = x.length - 1; i >= 0; i--) {
  revArray.push(x[i]);
}

console.log(revArray);
