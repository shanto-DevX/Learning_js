/* let countIng = 100;
let count = 0;

for (let i = 0; i <= countIng; i++) {
  let numString = i.toString();
  for (let j = 0; j < numString.length; j++) {
    if (numString[j] === "5") {
      count++;
    }
  }
}

console.log(count);
 */

// -> Find how many 5 In 1 to 100

/* let count = 0;
for (let i = 0; i <= 2024; i++) {
  let numToString = i.toString();
  for (let j = 0; j < numToString.length; j++) {
    if (numToString[j] === "5") {
      count++;
    }
  }
}

console.log(`1 to 100 Have ${count} times 5`);
 */

/* function findHowMany(finding, findNumber) {
  let count = 0;
  for (let i = 0; i <= finding; i++) {
    let numToString = i.toString();
    for (let j = 0; j < numToString.length; j++) {
      if (numToString[j] === findNumber) {
        count++;
      }
    }
  }

  console.log(`1 to ${finding} Have 😲${count}😲 times 5`);
}

findHowMany(2024, "5"); */

/* findHowMany = (finding, findNumber) => {
  let count = 0;
  for (let i = 0; i <= finding; i++) {
    let numToString = i.toString();
    for (let j = 0; j < numToString.length; j++) {
      if (numToString[j] === findNumber) {
        count++;
      }
    }
  }

  console.log(`1 to ${finding} Have 😲${count}😲 times 5`);
};

findHowMany(2024, "5"); */

/* findHowMany = (finding, findNumber) => {
  let count = 0;
  for (let i = 0; i <= finding; i++) {
    let numToString = i.toString();
    for (let j = 0; j < numToString.length; j++) {
      if (numToString[j] === findNumber) {
        count++;
      }
    }
  }

  console.log(`1 to ${finding} Have 😲${count}😲 times 5`);
};

findHowMany(2024, "5"); */

/* findHowMany = (finding, findNumber) => {
  let count = 0;
  for (let i = 0; i <= finding; i++) {
    let numToString = i.toString();
    for (const digit of numToString) {
      if (digit === findNumber) {
        count++;
      }
    }
  }

  console.log(`1 to ${finding} Have 😲${count}😲 times 5`);
};

findHowMany(2024, "5"); */
