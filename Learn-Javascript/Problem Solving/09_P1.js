/* function numbers(num1, num2) {
  if (num1 == 100) {
    return true;
  } else if (num1 + num2 == 100) {
    return true;
  } else {
    return false;
  }
}

let x = 10;
let y = 100;
let result = numbers(x, y);
console.log(result);
 */

let numbers = (a, b) => a === 100 || a + b === 100 || b == 100;

console.log(numbers(100, 10));
console.log(numbers(90, 10));
console.log(numbers(0, 100));
console.log(numbers(0, 10));
