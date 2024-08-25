/*
 *Write a JavaScript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.
 */

/* let strIs = (str) => `Hello ${str}`;
console.log(strIs("Javasctipt"));
 */

let strIs = (str) => (str.indexOf("Hello") === 0 ? str : `Hello ${str}`);
console.log(strIs("Hello Javasctipt"));
