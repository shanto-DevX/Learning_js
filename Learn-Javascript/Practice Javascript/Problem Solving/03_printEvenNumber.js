// print all even number  from 0 – 10

let num = 10;

/* for (let i = 0; i <= num; i++) {
  let StoreEvenNumber = 0;
  if (i % 2 == 0) {
    StoreEvenNumber += i;
    console.log(StoreEvenNumber);
  }
} */

/* for (let i = 0; i <= num; i += 2) {
  console.log(i);
} */

/* for (let i = 0; i <= num; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
} */

printEvenNumber = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      console.log(`Even NUMBER -> ${i}`);
    }
  }
};

function printOdd(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 1) {
      console.log(`ODD NUMBER -> ${i}`);
    }
  }
}

printEvenNumber(10);
printOdd(10);
