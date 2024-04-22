/* let value = 3;
let nagValue = -value;
console.log(nagValue); */

/* console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 3);
console.log(2 % 3); */

/* let str1 = "Hello";
let str2 = " Javascript";
let str3 = str1 + str2;
console.log(str3); */

/*
 * Type Conversion এর ক্ষেত্রে যেই টাইপের ডাটা প্রথমে থাকবে সে ডাটা প্রথমে আসবে যেমনঃ 
 -> "1" + 2 + 2 |> এখানে সব স্ট্রিং হবে
 -> 1 + 2 + "2" |> এখানে প্রথমে ২ টা যোগ হবে এবং পরে স্ট্রিং হবে। 
 -> https://tc39.es/ecma262/#sec-abstract-operations |> follow some Roules 
 */
/* console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); 

let x = 1 + 2 + "2";
console.log(x);
console.log(typeof x);
*/

// ===================

/* console.log(true);
console.log(+true); //-> For TypeChange true to 1
console.log(+""); //-> For TypeChange true to 0 */

/* let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); */

let x = 32;
console.log(x);
// x++;
// console.log(`After prefix  : ${x}`);
++x;
console.log(`After PostFix : ${x}`);
