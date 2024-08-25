// if

/* if(condition){ -> scops
    statement
} */

// |> Comparison Operator ==<  <, >, <=, >=, ==, !=, ===, !==
/* const isUserLoggedIn = true;

if (isUserLoggedIn === true) {
  console.log("Yes Logged In");
} else {
  console.log("Not Logged In");
} */

// ==============================================

/* const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`User Power : ${power}`);
}

console.log(`User Power : ${power}`); */

// ==============================================

/* 
    const blance = 1000;
    // if (blance > 450) console.log("Emplecit exicute");
    if (blance > 450)
    console.log("Emplecit exicute with Multiline"), console.log("Not Recomened"); 
*/

// ==============================================

/* const blance = 1000;

if (blance < 500) {
  console.log(`less then 500`);
} else if (blance < 750) {
  console.log(`less then 500`);
} else {
  console.log(`less then 1200`);
} */

// ==============================================

// |> Logical Operator :- && , ||

/* const userLoggedIn = true;
const debitCard = true;
const loggedInFomGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Let's shopping");
}

if (loggedInFomGoogle || loggedInFomGoogle) {
  console.log("User Logged In");
} */

// =================================================

// |> nullish coalescing operator (??) : null undefiend

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 11;
// console.log(val1);

// |> tarnary Operator
// condition ? true : false

const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("More then 80");
iceTeaPrice <= 80 ? console.log("True") : console.log("False");
