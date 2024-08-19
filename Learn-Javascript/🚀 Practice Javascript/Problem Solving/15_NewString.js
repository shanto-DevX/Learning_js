/* let newStr = (str) => (str.lenght < 3 ? str : str.slice(0, 3) + str.slice(-3));

console.log(newStr("xyzxyx"));
console.log(newStr("ShantootnahS"));
console.log(newStr("Samihaliza"));
 */

/* let newStrIs = (str) =>
  str.lenght < 4 ? str : str.slice(0, 4) + str.slice(-4);

console.log(newStrIs("HelloWorld"));
console.log(newStrIs("Javascript"));
console.log(newStrIs("pythonProgramming"));
console.log(newStrIs("abxubcjhvafvi")); */

/*
 * Write a JavaScript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.
 */

/* let newString = (str) => {
  return str.lenght < 3 ? str : str.slice(0, 3) + str.slice(-3);
}; */

/* let newString = (str) => (str >= 3 ? str : str.slice(0, 3) + str.slice(-3));
console.log(newString("HelloWorld")); */

((str) => {
  console.log(str.lenght < 3 ? str : str.slice(0, 3) + str.slice(-3));
})("HelloSHanto");
