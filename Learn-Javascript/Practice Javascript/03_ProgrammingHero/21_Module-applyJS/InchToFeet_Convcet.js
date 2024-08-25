// https://web.programming-hero.com/update-1/post/update-1-text-instruction-important-module-20-apply-javascript-concepts

// Inches to Feet Conversion

/* function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

const InchesToFeets = 144;
console.log(inchToFeet(InchesToFeets)); */

// var x = inchToFeet(36);
// console.log(x , "FEET" );

/* function milesToKM(miles) {
  const km = miles * 1.60934;
  return km;
}

const MilesIs = milesToKM(2);
console.log(MilesIs); */

/* function hourTomin(x) {
  var x = x * 60;
  return x;
}

var min = hourTomin(2);
console.log(min, "Min"); */

/* function evenOrOdd(num) {
  if (num % 2 == 0) {
    // return console.log("Number Is Even");
    return true;
  } else {
    // return console.log("Number Is Odd");
    return false;
  }
}

// evenOrOdd(25);
const age = evenOrOdd(25)
console.log(age); */

// program to check leap Year
/* function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " Is a leap year");
  } else {
    console.log(year + " Is Not a leap year");
  }
}

const year = 2024
checkLeapYear(year); */

/* function IsLeapYear(year) {
  const reminder = year % 4;
  if (reminder === 0) {
    console.log("Your Year is Leap Year", year);
  } else {
    console.log("Your Year is Not Leap Year", year);
  }
}

IsLeapYear(1933);
IsLeapYear(2002);
IsLeapYear(2020); */
//

/* function hourToSec(hour) {
  var hour = hour * 60 * 60;
  return hour;
}

var hourIs = hourToSec(4);
console.log(hourIs + ' Sec'); */

// -> *************************************************

/* function getSum(arrayOfNumber) {
  // console.log(arrayOfNumber);

  let sum = 0;

  for (let i = 0; i < arrayOfNumber.length; i++) {
    const index = i;
    const element = arrayOfNumber[index];
    sum += element;
    console.log(index, element, "   Sum of The Number -> " + sum);
  }

  return sum;
}

const myNumber = [10, 12, 15, 16, 54, 50];
getSum(myNumber); */

// -> *************************************************

/* function sumOfArray(arrayNumbers) {
  let sum = 0;

  for (let i = 0; i < arrayNumbers.length; i++) {
    const index = i;
    const element = arrayNumbers[index];
    sum = sum + element;
    console.log(
      "Array Index : " + index,
      "-> " + element,
      "Sum of The Array Number : " + sum
    );
  }

  return sum;
}

const myNuberArray = [10, 12, 4, 54, 5, 4, 57, 8, 7, 6, 6, 9, 4];

sumOfArray(myNuberArray); */

// -> *************************************************

function sumOfArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(
      "Array Index : " + index,"-> " + element,"Sum of The Array Number : " + sum
    );
  }

  return sum;
}

function getOddNumbersOfAnArray(numbers) {
  const oDDNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    // console.log(i)

    const index = i;
    const element = numbers[i];

    // Check Array INDEX even or ODD
    if (element % 2 !== 0) {
      console.log(index, element);
      oDDNumber.push(element);
    }
  }

  return oDDNumber;
}

const myNuberArray = [10, 11, 45, 54, 95, 14, 57];
const oDDnumbers = getOddNumbersOfAnArray(myNuberArray);
console.log(oDDnumbers)
const oddNumberSum = sumOfArray(oDDnumbers)
console.log("ODD Number SUM : ", oddNumberSum)
