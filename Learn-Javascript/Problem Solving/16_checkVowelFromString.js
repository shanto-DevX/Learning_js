/* const str = "Hey JS! Your R AMAZING";
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(data) {
  let count = 0;

  data
    .toLowerCase()
    .split("") //-> split for devide string TO array
    .forEach((em) => {
      vowels.includes(em) && count++; //-> this line Check Both conditions are true
    });

  return count;
}

const numOfVowels = countVowels(str);
console.log(numOfVowels); */

/*
 * Data toLowerCase
 * split for devide array
 * forEach for itaret all strings
 * forEach CallBack function check [array Includs methdas]
 */

// const str = "Hey JS! Your R AMAZING";
const str = "The quick brown fox jumps over the lazy dog";
// const str = "HELLO WORLD";
const vowels = ["a", "e", "i", "o", "u"];

// Count Whitr Space from String
function countWhiteSpace(data) {
  let count = 0;

  data.split("").forEach((em) => {
    if (em == " ") {
      count++;
    }
  });

  return count;
}

// Count Vowel from String
function countVowels(data) {
  let count = 0;

  data
    .toLowerCase()
    .split("")
    .forEach((em) => {
      vowels.includes(em) && count++;
    });

  return count;
}

//* Count Consonet from String
/* function countConsonet(data) {
  let count = 0;

  data
    .toLowerCase()
    .split("")
    .forEach((em) => {
      !vowels.includes(em) && count++;
    });

  return count;
} */

//* Count Consonet from String without Space
function countConsonet(data) {
  let count = 0;

  data
    .toLowerCase()
    .split("")
    .forEach((em) => {
      if (em !== " " && !vowels.includes(em)) {
        count++;
      }
    });

  return count;
}

const numOfVowels = countVowels(str);
const numOfConsonets = countConsonet(str);
const numOfwhiteSpace = countWhiteSpace(str);
console.log("String Length : ", str.length);
console.log("String White Space : ", numOfwhiteSpace);
console.log("Vowel : ", numOfVowels);
console.log("Consonet : ", numOfConsonets);
