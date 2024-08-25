/* function maxInArray(number) {
  let largest = number[0];
  for (let i = 0; i < number.length; i++) {
    const index = i;
    const element = number[index];
    // console.log(element);

    if (element > largest) {
      largest = element;
    }
  }

  return largest;
}

const heights = [167, 190, 110, 165, 137];
const tallest = maxInArray(heights);
console.log("Tallest Person Is : ", tallest); */

// Find Lowest Number from array

function findLowest(numbers) { //-> 2
  let Lowest = numbers[0]; // -> 2.1
  for (let i = 0; i < numbers.length; i++) { //-> 2.2
    const index = i; //-> 2.3
    const element = numbers[index]; //-> 2.4

    if (element < Lowest) { //-> 2.5
      Lowest = element; //-> 2.6
    }
  }

  return Lowest; //-> 2.1.1 Or 2.7
}

const numberOfArray = [10, 20, 30, 40, 52]; //-> 1
const results = findLowest(numberOfArray); //-> 3
console.log("Lowest Number : ", results); //-> 4
