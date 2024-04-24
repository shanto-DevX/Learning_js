/* let newStr = (str) => (str.lenght < 3 ? str : str.slice(0, 3) + str.slice(-3));

console.log(newStr("xyzxyx"));
console.log(newStr("ShantootnahS"));
console.log(newStr("Samihaliza"));
 */

let newStrIs = (str) =>
  str.lenght < 4 ? str : str.slice(0, 4) + str.slice(-4);

console.log(newStrIs("HelloWorld"));
console.log(newStrIs("Javascript"));
console.log(newStrIs("pythonProgramming"));
console.log(newStrIs("abxubcjhvafvi"));
