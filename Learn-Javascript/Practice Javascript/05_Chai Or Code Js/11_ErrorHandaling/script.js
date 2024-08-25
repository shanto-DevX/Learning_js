// error Handaling

/*
 * error দুই প্রকার
 * নিজে বানিয়ে দেওয়া "throw"
 * error কে হেন্ডেল করা যায়, try & Catch, finally দিয়ে
 * try এর মধ্যে ভেলিড কোড থাকে
 * Catch এর মধ্যে error মেসেজ থাকে
 * finally এর মধ্যে যা লেখা থাকবে সেইটা রান হবেই
 * finally ফাংশন এর মধ্যে বেশি ব্যবহার হয়।
 */

/* let a = prompt("Enter first Number");
let b = prompt("Enter second Number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry This is Not Number");
}
let sumOF = parseInt(a) + parseInt(b);
console.log(`The some is ${sumOF}`); */

// ====================================

let a = prompt("Enter first Number");
let b = prompt("Enter second Number");
let sumOF = parseInt(a) + parseInt(b);

/* if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry This is Not Number");
} */
/* try {
  console.log(`The some is ${sumOF}`);
} catch (error) {
  console.log("Error");
} finally {
  console.log("Program Close");
} */

function main() {
  try {
    console.log(`The some is ${sumOF}`);
    return true;
  } catch (error) {
    if (isNaN(a) || isNaN(b)) {
      console.log("Error");
      return false;
    }
  } finally {
    console.log("Program Close");
  }
}

let x = main();
console.log(x);
