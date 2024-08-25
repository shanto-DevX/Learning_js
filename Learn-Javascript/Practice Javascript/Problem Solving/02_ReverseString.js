// let revString = strIs.reverse();
// let strIs = ["s", "h", "a", "n", "t", "o"];

/* let strIs = "shanto";
let revStr = "";
for (let i = strIs.length - 1; i >= 0; i--) {
  revStr += strIs[i];
}

console.log(revStr);
 */

/* revStr = (stringIs) => {
  let revString = "";
  for (let i = stringIs.length - 1; i >= 0; i--) {
    revString += stringIs[i];
  }
  return revString;
};

let x = "shanto";
console.log(revStr(x)); */

/* function reverseNumber(num) {
  let revesed = 0;
  while (num != 0) {
    const lastDigit = num % 10;
    revesed = revesed * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return revesed;
}

const orgNumber = 123456;
const RevNumber = reverseNumber(orgNumber);
console.log(RevNumber); */

function revNumber(num) {
  let reversd = 0;
  while (num != 0) {
    const lastNumber = num % 10;
    reversd = reversd * 10 + lastNumber;
    num = Math.floor(num / 10);
  }

  return reversd;
}

let x = 12345;
console.log(revNumber(x));
