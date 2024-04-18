/* function reverseString(text) {
  for (let i = 0; i < text.length; i++) {
    const element = text[i];
    console.log(element);
  }
}

const str = "Hello Javascript";
const reversedStr = reverseString(str); */

/* function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reversed = reversed + element;
    console.log(element, reversed);
  }
  return reversed;
}

const str = "Hello Javascript";
const reversedStr = reverseString(str);
console.log("Reversed Output ", reversed); */

// Reversed String

/* function reverseString(text) {
  for (let i = 0; i < text.length; i++) {
    const element = text[i];
    console.log(element);
  }
}

let strIs = "Javascript";
const reversed = reverseString(strIs); */

/* function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reversed = reversed + element;
    console.log(element, reversed);
  }
  return reversed;
}f

let strIs = "Javascript";
const reversed = reverseString(strIs);
console.log("reversed Output: ",reversed) */

// ********************************************************

/* function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reversed = reversed + element;
    console.log(element, reversed);
  }
  return reversed;
}

const str = "Hello Javascript";
const reversedStr = reverseString(str);
console.log("Reversed Output ", reversed); */

function reverseSTR(text) {
  let rev = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    rev = rev + element;
    console.log(element, rev);
  }
  return rev;
}
const str = "Hello Javascript";

const reverseStr = reverseSTR(str);
console.log("Reversed Output: ", reverseStr);
