/*
 * Variable বানানের পূর্বে সেইটাকে ব্যবহার করাকে Hoisting বলে
 *
 */

// var a = 12;

/* 
    -> Hoisting
    * Variable and functions are hoisted which means there declaration is moved on the top of the code

*/
/* var a; //-> declaration
console.log(a); //-> Undefiend :- not Declear (a) Value
a = 13; // -> initialization
console.log(a); */

// Defiend & Not Defiend
/*

 *=> যখন কোন কিছুর ভেরিএবল ডিক্লিয়ার করা হয় কিন্তু কোন ভেলু থাকেনা তখন তাকে unDefiend

 *=> যখন কোন কিছু ডিক্লিয়ার করা হয় না এবং কোন ভেলু থাকেনা তখন তাকে not Defiend

 */

// console.log(b); // * b is not defined |> কারন b নেই
// var b = 12; // * undefined

// ----------------------------------------------------

// * Hoising
// var a = 12;

/* var a; //-> declaration
console.log(a); //-> Undefiend
a = 12; // -> initialization */

// console.log(a);
// var a = 12;

// *---------------------------------------

// Defiend & Not Defiend
/*
    *=> যখন কোন কিছুর ভেরিএবল ডিক্লিয়ার করা হয় কিন্তু কোন ভেলু থাকেনা তখন তাকে unDefiend
    *=> যখন কোন কিছু ডিক্লিয়ার করা হয় না এবং কোন ভেলু থাকেনা তখন তাকে not Defiend
 */

// console.log(b); //*- ReferenceError: b is not defined

console.log(a); //*- undefined
var a;
