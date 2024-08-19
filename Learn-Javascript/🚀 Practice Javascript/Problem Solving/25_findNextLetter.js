/* 
* একটা প্রোগ্রাম লিখব যেইটা ব্যবহার করে ইংরেজি কোন এলফাবেট নিলে সেইটার পরের ওয়ার্ড আসবে।

A ** C
B ** D
........... 

DOM দিয়ে একটা বানাবো। */
// ------------------------------------------------

function letterIs(letter) {
  letter = letter.toUpperCase();

  let charCode = letter.charCodeAt(0);
  charCode = ((charCode - 65 + 2) % 26) + 65;

  return String.fromCharCode(charCode);
}

let textLetter = letterIs("L");
console.log(textLetter);
