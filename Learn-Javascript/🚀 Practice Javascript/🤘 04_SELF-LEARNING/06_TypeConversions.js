/* 
    * JavaScript Type Conversions:
    * JavaScript  এ দুই ধরনের  Type Conversions আছে
    * Implicit Type Conversions 
         * ⇒ নিজে নিজে Type Convert করে
    * Emplicit Type conversion
        * ⇒ ইউজার নিজে নিজে Type Convert করে

https://www.programiz.com/javascript/type-conversion

*/

//  -> String To int
let x = "10";
let y = "20";
let result = parseInt(x) + parseInt(y);
console.log(result);

let gpa = 3.12116654;
console.log(gpa.toFixed(2));
console.log(parseInt(gpa));
console.log(parseFloat(gpa));
console.log(parseFloat(gpa));
console.log(typeof String(gpa));
