// 5:09:27
/*
 * Spread Operator is ES6 Feature
 * iterable [etc. array]
 * commonly used to shallow copies
 * ... => 3 Dot
 * এই Spread Operator ব্যবহার করে জোড়া দেওয়া হয়, এটি ব্যবহার এর জন্য ৩ টা ডট দিয়ে হয় variable এর প্রথমে  ...Variable; 
 */


/*
  The Spread Operator is used to 'spread' an iterable into its elements, while the Rest Operator 'collects' multiple elements into an array. Understanding these operators can greatly enhance code readability and efficiency, making them essential tools for contemporary JavaScript development.
*/

// function / arrat / object

/* function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "yellow", "teal", "gray"];
giveMe4(...colors); */

/* let arayIs = [1, 2, 3, 4, 5];
let arayIs2 = [6, 7, 8, 9, 10];
let concat = [...arayIs, ...arayIs2];
console.log(concat); */

/* let ary = [1, 2, 3, 4, 5];
let moreAray = [...ary, 6, 7];
console.log(ary);
console.log(moreAray); */

/* const obj = {
  x: 1,
  y: 2,
};

const obj2 = {
  z: 3,
  zz: 4,
};

const obj3 = {
  ...obj,
  ...obj2,
};

console.log(obj3); */

// ========================================

let arr = [1, 2, 3];
let arr2 = [4, 5];

let concatAry = [...arr, ...arr2];
console.log(concatAry);

// ==============

const user = {
  name: "Shanto",
  age: 24,
};

const cloneObj = {
  ...user,
};

console.log(cloneObj);
