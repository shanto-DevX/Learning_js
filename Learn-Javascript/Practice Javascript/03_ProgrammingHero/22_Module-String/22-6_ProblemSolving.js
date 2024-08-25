/* 
    Problem analysis
    * firt get inpur (jim & dela)
    * check condiiton if jim win then they get cack outherwise get dela 
*/

/* let jimNumber = 69;
let delaNumber = 97;

if (jimNumber < delaNumber) {
  console.log("Dela Get Cack");
} else {
  console.log("jim Get Cack");
} */

/* let jimNumber = 69;
let delaNumber = 100;
let chinkuNumber = 99;

if (jimNumber < delaNumber && delaNumber > chinkuNumber) {
  console.log("Dela Get Cack");
} else if (jimNumber > delaNumber && jimNumber > chinkuNumber) {
  console.log("jim Get Cack");
} else {
  console.log("chinku Get Cack");
}


console.log(Math.max(jimNumber,delaNumber,chinkuNumber))
console.log(Math.min(jimNumber,delaNumber,chinkuNumber)) */

/*
 * write a function that will take 3 number wiull returen max Number
 */

/* function findMax() {
  let num1 = 20;
  let num2 = 30;
  let num3 = 40;
  let result = Math.max(num1, num2, num3);
  return console.log(result);
}

findMax() */

/*
 * write a function that will take 3 number perameters and will returen min Number
 */

function findMin(num1, num2, num3) {
  let result = Math.min(num1, num2, num3);
  return console.log(result);
}

findMin(10, 20, 30);
