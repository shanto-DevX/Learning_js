/* 
    -> Math.pow(0,0)
    -> Math.abs(var-var) |> Dont show nagative Value
*/

// const resultPower = Math.pow(3, 8);
// // console.log(resultPower);

// const num1 = 25;
// const num2 = 45;

// const gap = Math.abs(num1 - num2);
// console.log(gap)

// if (gap < 5) {
//   console.log("You guys can be friends");
// } else {
//   console.log("You guys stay apart");
// }

const num = 3.5416;
// const fullNum = Math.round(num)
// const fullNum = Math.ceil(num)
const fullNum = Math.floor(num);
// console.log(fullNum)

// console.log(Math.round(Math.random()*100))

for (let i = 0; i < 10; i++) {
  // console.log(Math.round(Math.random() * 100));
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

/*
 *
 */

let numberIs = -5;
console.log(numberIs, " -> ", Math.abs(numberIs));

numberIs = 5.003;
console.log(numberIs, " -> ", Math.ceil(numberIs));

numberIs = 5.999;
console.log(numberIs, " -> ", Math.floor(numberIs));

numberIs = 5.999;
console.log(numberIs, " -> ", Math.round(numberIs));

numberIs = 5.299;
console.log(numberIs, " -> ", Math.round(numberIs));

numberIs = Math.random() * 100;
console.log(numberIs);
