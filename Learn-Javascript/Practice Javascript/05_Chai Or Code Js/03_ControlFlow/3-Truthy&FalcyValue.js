// Truthy & Flacy VAlue
/*
    * Truthy Value
    *    👉 String "With Data" / "0" / 'false' / " "
    *    👉 array []
    *    👉 array {}
    *    👉 function(){} -> empty Function
    
    * ------------------------------------------------
    * 
    * false ==  0 ==< True
    * false == "" ==< True
    * 0     == "" ==< True
    * 
    * ------------------------------------------------
 
==========================================================
    * Falsy Value
    *    👉 false
    *    👉 0 / 0n[bitInt] / -0
    *    👉 null
    *    👉 NaN
    *    👉 undefined
    *    👉 String "" -> WithOut Data

 */

// const userEmail = "Shanto@gmail.com";
/* const userEmail = "";

if (userEmail) {
  console.log("Got Use email");
} else {
  console.log("Dont Have user EMail");
} */

/* const userEmail = [];
if (userEmail.length === 0) {
  console.log("Array IS empty");
} */

const userEmail = {};
if (Object.keys(userEmail).length === 0) {
  console.log("Object IS empty");
}
