/* function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const avrage = total / 3;
    return avrage;
  }
  
  const assignment1Marks = 60;
  const assignment2Marks = 58;
  const assignment3Marks = 59;
  
  var myAverage = getAverage(
    assignment1Marks,
    assignment2Marks,
    assignment3Marks
  );
  
  console.log(myAverage); */

//   -----------------------------------------------

/* function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

const result_is1 = add(35, 15);
const result_is2 = add(35, 10);
const finalResult = add(result_is1, result_is2);
console.log(finalResult); */

/* function sqrt(num1, num2) {
  return Math.pow(num1, num2);
}

const sqrtNumber = sqrt(4 );
console.log(sqrtNumber); */

// https://www.educative.io/answers/parameter-vs-argument

/* function test() {
  return "one";
  return "two";
  return "three";
}

console.log(test()); */

/*
 * |> No Return & No parameter
 * |> has Return & No parameter
 * |> no Return & has parameter
 * |> has Return & has parameter
 */

// ------------------------------

/* function sum(a, b) {
  return a + b;
}

x = sum(10, 20);
console.table(x); */

/* function sum(a, b) {
  a = 10;
  b = 20;
  return a+b;
}

console.log(sum()) */
// x = sum(10, 20);
// console.table(x);

/*
 * |> No Return & No parameter
 * |> has Return & No parameter
 * |> no Return & has parameter
 * |> has Return & has parameter
 */

// * |> No Return & No parameter

/* function PrintSome() {
  console.log("No Return & No parameter");
}

PrintSome(); */

// * |> has Return & No parameter

/* function PrintSome() {
  return console.log("has Return & No parameter");
}

PrintSome(); */

// * |> no Return & has parameter -> বুজিনাই :( 

/* function myFunc(x) {
  console.log("no Return & has parameter");
}

myFunc(x); */

/* function sum(a, b) {
  a = 10;
  b = 20;
}

x = sum(a + b);
console.log(x); */



// * |> has Return & has parameter

function sum(a, b) {
  a = 10;
  b = 20;
  return a+b
}

console.log(sum());