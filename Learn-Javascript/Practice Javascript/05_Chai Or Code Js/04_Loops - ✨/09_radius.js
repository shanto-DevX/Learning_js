/* 
    |> radius
    -> accumulator => empty Value
    -> CurrentValue => array Value
    * এখানে প্রথমে একটা ইনিশিয়াল ভেলু ০ এর কাছে যায় accumulator, এর পরে accumulator + CurrentValue সাম করলে যা হবে সেইটা accumulator এর কাছে চলে যায় এবং CurrentValue এর সাথে সাম করে।
*/

const myNums = [1, 2, 3];

/* let sumInit = 0;
let sumOfArrayNum = myNums.reduce(function (acc, cVal) {
  console.log(`acc: ${acc} and currval: ${cVal}`);
  return acc + cVal;
}, sumInit); */

/* let sumOfArrayNum = myNums.reduce(function (acc, cVal) {
  console.log(`acc: ${acc} and currval: ${cVal}`);
  return acc + cVal;
}, 0); */

/* let sumOfArrayNum = myNums.reduce((ac, cvalue) => {
  return ac + cvalue;
}, 0);
console.log(sumOfArrayNum); */

/* let sumOfArrayNum = myNums.reduce((ac, cvalue) => ac + cvalue, 0);
console.log(sumOfArrayNum); */

// ===================================================
const shoppingCart = [
  {
    itemName: "Js Course",
    price: 999,
  },
  {
    itemName: "Mobile Course",
    price: 5999,
  },
  {
    itemName: "Dsa Course",
    price: 120090,
  },
];

// let priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
let priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
