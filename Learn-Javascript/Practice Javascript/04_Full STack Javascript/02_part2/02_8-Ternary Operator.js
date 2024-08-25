// |> Ternary Operator
// |> condition ? expeIfTrue: exprIfFalse;

/* let x = false;
let y = x == true ? "Its true" : "Its False";
console.log(y);
 */

/* let checkVowel = "E";
let vowelIs =
  checkVowel.toLocaleLowerCase() === "a" ||
  checkVowel.toLocaleLowerCase() === "e" ||
  checkVowel.toLocaleLowerCase() === "i" ||
  checkVowel.toLocaleLowerCase() === "u"
    ? `${checkVowel} Its Vowel`
    : `${checkVowel} Its Consonet`;

console.log(vowelIs);
 */

/* function checkPassWord(password) {
  return password >= 9 ? "Strong Password" : "Low password";
}

console.log(checkPassWord(8));
console.log(checkPassWord(9)); */

function haveMoney(money) {
  //   return money <= 1 ? "Have Money! Buy Product" : "No Money";
  return money === true ? "Have Money! Buy Product" : "No Money";
}

console.log(haveMoney(true));
