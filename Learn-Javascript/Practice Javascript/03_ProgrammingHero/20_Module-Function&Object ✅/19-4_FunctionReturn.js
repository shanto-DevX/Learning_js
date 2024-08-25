// * Return এর পর যা লেখা থাকবে সেটার মান(ভেলু) রিটার্ন হিসেবে পাওয়া যাবে

/* function add(num1, num2) {
  console.log(num1, num2);
  var sum = num1 + num2;
  console.log(sum);
  //   return sum;
}

// add(10, 5);
var toTal = add(80, 20);
console.log("Total : ", toTal); */

// ***********************************

function bringSingara(money) {
  var SingaraPrice = 10;
  var quantity = money / SingaraPrice;

  return quantity;
}

var myTaka = 200;
var Singaras = bringSingara(myTaka);
console.log("Eating Singaras: ", Singaras);
