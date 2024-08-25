// Sum of array
// Sum of array Even OR ODD Number
// -> let aray = [5,7,8,10,45,30]
// factorial [for,while, ++ , --]
// findLeapYear() -> Array[2023,2024,2025,2028,2030]

//* Sum of array

/* function sumOfarray(arrayNumber) {
  let sum = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    let index = i;
    let element = arrayNumber[index];
    sum += element;

    console.log("Sum Of Array : " + index, element, sum);
    // console.log("Sum Of Array : " , sum);
  }
  return sum;
}

let arrayIs = [5, 7, 8, 10, 45, 30];
sumOfarray(arrayIs); */

/* function sumOfArray(arrayNumber) {
  let sum = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    let index = i; //* Find INDEX
    let elements = arrayNumber[index]; //* Find ELEMENT IN ARRAY
    sum += elements; //* SUM OF ELEMENT
    console.log("SUm OF ARRAY : ", index, elements, sum);
  }

  return sum;
}

function findOddNumber(numbers) {
  const ODDNumberStore = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];

    if (element % 2 !== 0) {
      //   console.log("ODD NUMBER IS : ", index, element);
      ODDNumberStore.push(element);
    }
  }

  return ODDNumberStore;
}

let arrayIs = [5, 7, 8, 10, 45, 30];
let OddNumberIs = findOddNumber(arrayIs);
console.log("ODD NUMBER IS : ", OddNumberIs);

const sumOfODDNumber = sumOfArray(OddNumberIs);
console.log("Sum Of ODD NUMBER : ", sumOfODDNumber); */

function findLeapYear(yearIs) {
  const year = [];

  for (let i = 0; i < yearIs.length; i++) {
    const index = i;
    let element = yearIs[index];

    if ((0 == element % 4 && 0 != element % 100) || 0 == element % 400) {
      console.log(element + " Is a leap Year");
    } else {
      console.log(element + " Is Not a leap Year");
    }
  }

  return year;
}

let YearInArray = [2023, 2024, 2025, 2028, 2030];
findLeapYear(YearInArray)
