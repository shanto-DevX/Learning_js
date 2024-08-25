/*
 * Program to find from array : even nUmber, How many Even Number & sum of even nUmber
 */

/* let countEvenNumber = (arr) => arr.filter((num) => num % 2 == 0).length;

console.log(countEvenNumber([2, 4, 5, 8, 7, 14, 9, 656, 9, 47, 5])); */

/* let aryIs = [2, 4, 5, 8, 7, 14, 9, 656, 9, 47, 5];
result = [];
sum = 0;

for (let i = 0; i < aryIs.length; i++) {
  if (aryIs[i] % 2 == 0) {
    result.push(aryIs[i]);
    sum += aryIs[i];
  }
}

console.log(`Even Number List From Array : ${result}`);
console.log(`Total Even Number From Array : ${result.length}`);
console.log(`Sum OF Even Number From Array : ${sum}`); */

let aryIs = [2, 4, 5, 8, 7, 14, 9, 656, 9, 47, 5];

let EvenNumbers = aryIs.filter((num) => num % 2 == 0);
console.log("Even Number List From Array : ", EvenNumbers);

let evenNumberLenght = EvenNumbers.length;
console.log("Even Number Lenght : ", evenNumberLenght);

let sumOfEvenNumber = EvenNumbers.reduce((sum, num) => sum + num, 0);
console.log(`Sum OF Even Number : ${sumOfEvenNumber}`);
