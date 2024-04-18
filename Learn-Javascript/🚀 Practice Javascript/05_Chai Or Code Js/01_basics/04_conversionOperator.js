/*
 * Type Conversion
 */

// let score = "33abcd"; |> NaN
// let score = null; |> 0
// let score = undefined;  |> NaN
// let score = true; //|> 1
// let score = false; //|> 0

/* console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); */

// =============================================

// let value = 1; |> true
// let value = 0; |> False
// let value = ""; |> False
// let value = "xyz"; |> False
/* let value = "";
let valueToBool = Boolean(value);
console.log(valueToBool); */

// =============================================

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
