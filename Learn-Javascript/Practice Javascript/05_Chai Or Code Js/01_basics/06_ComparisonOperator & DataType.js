/* console.log(2 > 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 !== 1);
console.log(2 === 1); */

// ----------------------------------

/*
 * Compares Same Datatype
 * Sting to Number COnver automaticaly
 */

// console.log("2" > 1);
// console.log("02" > 1);

// => https://javascript.info/comparison#comparison-with-null-and-undefined

// * -> comparisons > < >= <= |> Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// * On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

/* 


console.log(null > 0); [1]
console.log(null == 0); [2]
console.log(null >= 0); [3]
*/

// * Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
// * The equality check (3) returns false because undefined only equals null, undefined, and no other value.

console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined > 0);
