/* function sumOfNumbers(numbers) {
  let sum = 0;

  for (let i = 1; i <= numbers; i++) {
    sum += i;
    console.log(i, sum);
  }
  return sum;
}

sumOfNumbers(5)
 */

// multiplicationOFNumbers

/* function multiplicationOFNumbers(numbers) {
    let result = 1;
  
    for (let i = 1; i <= numbers; i++) {
      result *= i;
      console.log(i, result);
    }
    return result;
  }


const results = multiplicationOFNumbers(3)
console.log("Final Result IS : " + results) */

/* function factiorial(number) {
  let result = 1;
  let i = 1;
  while (i <= number) {
    result *= i;
    console.log(i, result);
    result++;
  }

  return result;
}
const results = factiorial(3);
console.log("Final Result IS : " + results); */

/* function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
    // console.log(i);
  }
  return result;
}

const number = 5;
const fact = factorial(number);
console.log("Factorial of 9 : ", number, fact); */

function factorial(number) {
  let num = 1;
  let result = 1;
  while (num <= number) {
    result = result * num;
    num++;
  }

  return result;
}


const number = 5;
const fact = factorial(number);
console.log("Factorial of 9 : ", number, fact); 