/* let x = 10;

for (let i = 1; i <= x; i++) {
  const elem = i;
  if (elem == 5) {
    console.log(`5 Is The Best`);
    break;
  }
  console.log(elem);
} */

// console.log(elem);

// -------------------------------------------

/* for (let i = 1; i < 10; i++) {
  console.log(`Outer Loop Value ${i}`);
  for (let j = 1; j < 5; j++) {
    console.log(`Inner Loop Value ${j} and inner Loop Value ${i}`);
  }
} */

let x = 196;
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    // break;
    continue;
  }
  console.log(`${x} X ${i} = ${i * x}`);
}

/* let myAry = ["A", "B", "C"];

for (let i = 0; i < myAry.length; i++) {
  if (i == myAry[1]) {
    console.log(i, myAry[i]);
    break;
  }
  console.log(i, myAry[i]);
} */
