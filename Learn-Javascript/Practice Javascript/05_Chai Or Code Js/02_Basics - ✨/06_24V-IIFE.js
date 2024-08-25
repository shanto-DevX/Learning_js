// |> Immediately Invoked Function Expressions IIFE

/*

  * function কে Immediately এক্সিকিউট করতে IIFE ব্যবহার হয়।
  * Global sCope এর ডাটা যেনো ফাংশন এর মধ্যে না আসে সে জন্য আলাদা sCope তেরি করা হয়
  * ; দিয়ে কোড শেষ করতে হয় এবং একেরে অধিক IIFE লেখা যায়।
  
 */

/* (function chai() {
  console.log(`DB CoNNECTED`);
})(); */

/* let x = 10;

(function numIS() {
  x = 100;
  // return x;
  console.log("Inside Fucntion X: ", x);
})();

console.log("Global X : ", x);
// console.log("Inside Fucntion X: ", numIS());
// numIS(); */

/* (() => {
  console.log("Hello WOrld 1");
})(); */

/* 
//-> Named IIFE
(function more() {
  console.log("Hello WOrld 2");
})(); 

*/

// --------------------------

//-> Simple IIFE
/* ((args) => {
  console.log("Arugments : ", args);
})("Perameter"); */

// ----------------------------

/* (function numIS(a1, b2) {
  console.log(a1 + b2);
})(10, 20); */

/* ((a1, b2) => {
  console.log(a1 + b2);
})(10, 20); */

(() => {
  console.log("Hello IIFE");
})();
