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

function loginUserMessage(userName = "Abcd") {
  //   if (userName === undefined)
  if (!userName) {
    return "Plese Enter a UserName";
  } else {
    return `Hola! ${userName} Just Logged IN`;
  }
}

// let message = loginUserMessage("Shanto");
let message = loginUserMessage();
console.log(message);
