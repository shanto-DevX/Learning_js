// array
/* 
    * Array get Heap memory


    |> Methods
    * var.length
    * var.push(addValue)        -> Add Value in last |> 
    * var.pop()                 -> Remove Value in Last
    * var.unshift(addValue)     -> add Value in Array Start
    * var.unshift()             -> Remove Value in Array Start
    * var.includes()            -> Return Boolean Value
    * var.indexOf()             -> find index of array items
    * var.join()                -> join arrays(x / x.join()) |> & convert it Object to string
    * var.toString()                -> convert array to string
    
    * var.slice(1,3)            -> slice() extracts elements into a new array without modifying the original |> Original A ->  [0, 1, 2, 3,4, 5, 6, 7] |> এখানে আউটপুট আসবে [1,2], প্রথম এবং শেষ ইনডেক্স আসবেনা। 
    
    * var.splice(1,3)           -> splice() changes the contents of the original array |> Original A ->  [0, 1, 2, 3,4, 5, 6, 7] |> এখানে আউটপুট আসবে [1,2,3], প্রথম ইনডেক্স এর পর থেকে কাউন্ট শুরু তাই প্রথমে ইনডেক্স আসবেনা।  splice অরিজিনাল এরে তে পরিবর্তন আনে। 
    
    * x.concat(y) ->concat দুইটা array কে মার্জ করে ফেলে এবং নতুন এরে তেরি হয় 

    * flat -> array এর মধ্যে array থাকলে যদি চাই সবগুলো ভেঙ্গে একটি array হবে তাহলে flat(ভেলু হবে) দিতে হবে। 
*/

// const myProgramming = ["C", "c++", "python", "Javascript"];
// const myArray = new Array(11, 22, 33, 44, 55);
// console.log(x);
// console.log(myProgramming);
// console.log(myArray);

// Mathods
// console.log(x.length);
// x.push(5);
//-> x.push(6);
// console.log(x);
//-> x.pop();
//-> x.unshift(0);

//-> x.unshift(0);
//-> x.shift();

// console.log(x.includes(4));
// console.log(x.indexOf(4));

// let x = [0, 1, 2, 3, 4, 5, 6, 7];
// let y = x.join();
// console.log(x);
// console.log(typeof y);

// console.log("Original A -> ", x);

// slice
// console.log("Original -> ", x);
// console.log("Slice  B -> ", x.slice(1, 3));
// console.log("Before Slice -> ", x);

// Splice
// console.log("Original -> ", x);
// console.log("splice  C -> ", x.splice(1, 3));
// console.log("Before splice -> ", x);

// +++++++++++++++++++++++++++++++++
// const marvel_heros = ["thor", "Ironman", "spiderman"];
// const dc_heros = ["superman", "flash", "batman"];

/* concat দুইটা array কে মার্জ করে ফেলে এবং নতুন এরে তেরি হয়  */
// let x = marvel_heros.concat(dc_heros);
// console.log(x);

/* * array এর মধ্যে array চলে আসবে, এবং নতুন ইনডেক্স চলে আসবে। */
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

//* spread operator
// const all_newHeros = [...marvel_heros, ...dc_heros];
// console.log(all_newHeros);

// --------------------------------

//* flat
// const anotherNewArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_array = anotherNewArray.flat(Infinity);
// console.log(real_array);

//* Array.isArray => check validity & Return Boolean
// console.log(Array.isArray("Shanto"));

//* Array.from => convert string to separate index In One array
// console.log(Array.from("Shanto"));
// console.log(Array.from({ name: "Shanto" })); //interesting {Intervidew}

/* let num1 = 100;
let num2 = 200;
let num3 = 300;
let num4 = "300";
let num5 = [300];

console.log(Array.of(num1, num2, num3));
console.log(Array.from(num4));
console.log(Array.isArray(num5)); */

// ==========================================================

// let x = [1, 44, 55, 9, 99, 79, 9, 48];

// -> for < দিয়ে এরে নাম্বার এবং ইনডেক্স দেখা যায়।
// for (let i = 0; i < x.length; i++) {
//   console.log(i, x[i]);
// }

// console.log("\n-----------------\n");

// -> for <= দিয়ে এরে নাম্বার এবং ইনডেক্স দেখা যায় কিন্তু লাস্টে undefined আসে
// for (let i = 0; i <= x.length; i++) {
//   console.log(i, x[i]);
// }

// -> for ... of দিয়ে এরে নাম্বার দেখা যায় ইনডেক্স দেখা যায় না।
/* for (let el of x) {
  console.log(el);
} */

// -> for ... in দিয়ে এরে নাম্বার এবং ইনডেক্স দেখা যায়।
/* for (let el in x) {
  console.log(el, x[el]);
} */

// -----------[ Probelm SOlving ]-------------

let marks = [85, 97, 44, 37, 76, 60];
let sumIs = 0;
// let avgMarks = marks.reduce((a, b) => a + b, 0) / marks.length;

/* for (let i = 0; i < marks.length; i++) {
    sumIs += marks[i];
} */

/* 
* -> find Avg of Array MAkrs
for (let em of marks) {
  console.log(em);
  sumIs += em;
}

let avgIs = sumIs / marks.length;

console.log(`Sum OF => ${sumIs}`);
console.log(`Avg OF => ${avgIs}`); 
*/

let items = [250, 645, 300, 900, 50];
// let i = 0;

/* for (let em of items) {
  //   console.log(`Value of index ${i} = ${em}`);
  let offer = em / 10;
  items[i] = items[i] - offer;
  console.log(`Value after offer = ${items[i]}`);

  i++;
} */

/* for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
  console.log(`Value after offer = ${items[i]}`);
} */

const myArray1 = new Array(11, 22, 33, 44, 55);
// const myArray2 = new Array(12, 23, 34, 45, 56);
// console.log("myArray1 => " + myArray1);
// console.log("myArray2 => " + myArray2);
// myArray.push(35); // |> CHange Main Array
// myArray.pop(); // |> CHange Main Array
// concat => Create New array & can't change Original Array
// let x = myArray1.concat(myArray2);
// console.log(x);
// console.log("myArray1 => " + myArray1);
// console.log("myArray2 => " + myArray2);

// console.log("---------------------");
// -> slice Chaing In Main Array  |> Retunr piece of array |> cut of cack
// console.log(myArray1);
// console.log(myArray1.slice(1, 3));
// console.log(myArray1);

// -> splice Chaing In Main Array  |> add, remove, replace
// console.log(myArray1);
// console.log(myArray1.splice(1, 3));

// -> replace New elements : // 11, 22, 33, 44, 55 -> [ 11, 50, 55, 55 ]
// console.log(myArray1.splice(1, 3, 50, 55));
// console.log(myArray1.splice(1, 3, 50, 55));

// -> Add New elements : // 11, 22, 33, 44, 55 -> [ 11, 50, 55, 22, 33, 44, 55 ]
// console.log(myArray1.splice(1, 0, 50, 55));

// -> Delete New elements : // 11, 22, 33, 44, 55 -> []
// console.log(myArray1.splice(3, 1));
// console.log(myArray1.splice(3)); // delete all : 44,55
// console.log(myArray1.splice()); // Nothing DONE

// console.log(myArray1);

//* ======================================================

let companies = new Array(
  "Bollmberg",
  "Microsoft",
  "Uber",
  "Google",
  "IBM",
  "Netflix"
);

// companies.shift();
// companies.splice(2, 1, "Ola");
companies.push("Amazon");
console.log(companies);
