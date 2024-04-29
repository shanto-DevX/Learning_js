/* 
Write a JavaScript program to check a given string contains
2 to 4 occurrences of a specified character.
*/

const countChars = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

const contains2to4 = (str, char) =>
  countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2to4("ooh!", "o"));
console.log(contains2to4("oh!", "o"));
console.log(contains2to4("oooh!", "o"));
console.log(contains2to4("ooiih!", "o"));
console.log(contains2to4("ooooooh!", "o"));
