/*
 * var      |> issue block scope & functional Scope
 * let      |> Not declearable but replace Data
 * const    |> Not Changable
 */

const accountId = 144553;
let accountEmail = "contact@shanto.studio";
var accountPass = "1234";
accountCity = "Dhaka";
let accouuntState;

// accountId = 24422;

accountEmail = "hello@gmail.com";
accountPass = "456987";
accountCity = "narayanganj";

console.log(typeof accountCity);
console.table([
  accountId,
  accountEmail,
  accountPass,
  accountCity,
  (accouuntState = "Mowchak"),
]);
