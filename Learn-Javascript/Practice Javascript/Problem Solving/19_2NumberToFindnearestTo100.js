/* 
    Given two values, write a JavaScript program to find out
which one is nearest to 100
*/

let Nearest100 = (num1, num2) => {
  //   return num1 < 100 || num2 < 100;
  return 100 - num1 < 100 - num2 ? num1 : num2;
};

console.log("nearest to 100 : ", Nearest100(10, 20));
console.log("nearest to 100 : ", Nearest100(10, 50));
console.log("nearest to 100 : ", Nearest100(90, 50));
