/*
 * Function
 */

/*  */

/* function multiplicationTable(x) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${x} X ${i} = ${x * i}`);
  }
}

multiplicationTable(5);
// console.log(x); */

/* function sum(a, b) {
  return a + b;

  // console.log("This code Dosen't exist becouse after return the value then anyCode Dosen't exist")
}

let x = sum(10, 20);
console.log(x);
 */

// ------------------------------------------------

/* function loginUserMessage(userName) {
  //   if (userName === undefined)
  if (!userName) {
    return "Plese Enter a UserName";
  } else {
    return `Hola! ${userName} Just Logged IN`;
  }
}

// let message = loginUserMessage("Shanto");
let message = loginUserMessage();
console.log(message); */

/* function loginUserMessage(userName = "Abcd") {
  //   if (userName === undefined)
  if (!userName) {
    return "Plese Enter a UserName";
  } else {
    return `Hola! ${userName} Just Logged IN`;
  }
}

// let message = loginUserMessage("Shanto");
let message = loginUserMessage();
console.log(message); */

// ========================================================

// -> Rest Operator methods
function calculateCardPrice(val1, val2, ...num1) {
  return val1, val2, num1;
}

// console.log(calculateCardPrice(1, 2, 200, 100, 500));

/* const user = {
  userName: "shanto",
  price: 199,
};

function handelObject(anyObject) {
  console.log(
    `Username is ${anyObject.userName} & Price is ${anyObject.price}`
  );
}

// handelObject(user);
handelObject({
  userName: "HelloShanto",
  price: 399,
}); */

/* const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getarray) {
  return getarray[1];
}

// console.log(`Second Value : ${returnSecondValue(myNewArray)}`);
console.log(`Second Value : ${returnSecondValue([100, 200, 300, 400])}`);
 */

/* function showObject(myObjects) {
  return `UserName: ${myObjects.userName} & Is LogIN : ${myObjects.isLogIn}`;
}

console.log(
  showObject({
    userName: "Shanto",
    isLogIn: true,
  })
); */

/* function showArray(arrayIs) {
  return arrayIs[2];
}

console.log(showArray([200, 100, 300, 400])); */

// ----------------------

function myFunc(x = 3) {
  return x;
}

console.log(myFunc()); //3
console.log(myFunc(undefined)); //3
console.log(myFunc(null)); //null
