// https://youtu.be/H3XIJYEPdus?si=E57xQ6ax0hfOSuzU&t=16712
/*
 * Arrow function
 */

// * => Normal Function
/* function greet(username) {
  return `Hello ${username}`;
}

console.log(greet("Shanto")); */

// * => arrow Function

/* greet = (username) => {
  return `Hello ${username}`;
};

console.log(greet("Shanto")); */

//* -> This Correct If use 1 Perameter
/* greet = username => { 
  return `Hello ${username}`;
};

console.log(greet("Shanto"));  */

//* -> if i use 2 or more Perameter then need to Use brackets
/* greet = (username, userNameTwo) => {
  return `Hello ${username}`;
};

console.log(greet("Shanto")); */

//* -> Using Function in ONELINE |> no return / No Brackets
/* greet = (username) => `Hello ${username}`;
console.log(greet("Shanto")); */

//* -> Function Expretion With Arrow Function
/* const greet = (username) => `Hello ${username}`;
console.log(greet("Shanto")); */

// |> ------------------------------------------------------

/* double = (number) => {
  return number * 2;
}; */

// double = (number) => number * 2;

/* const double = (number) => number * 2;

console.log(double(8)); */

// => ---------------------------------------------------

/* const BMIFIND = (width, height) => {
  return width / (height * height);
};

const x = BMIFIND(50, 5.3);
console.log(x.toFixed(2)); */

/* checkVowels = (words) => {
  if (
    words == "a" ||
    words == "e" ||
    words == "i" ||
    words == "o" ||
    words == "u" ||
    words == "A" ||
    words == "E" ||
    words == "I" ||
    words == "O" ||
    words == "U"
  ) {
    console.log(`${words} Is Vowel`);
  } else {
    console.log(`${words} Is Consonet`);
  }
};

checkVowels("a");
checkVowels("b");
checkVowels("i");
checkVowels("I"); */

/* checkNumber = (Number) => {
  if (Number % 2 == 0) {
    console.log(`${Number} is even`);
  } else {
    console.log(`${Number} is Odd`);
  }
};

checkNumber(5);
checkNumber(0); */

/* NameIs = (AddName) => {
  console.log(`The Name Is: ${AddName}`);
};

// NameIs("SHanto"); */

/* let calCulate = (x, y) => {
  return x + y;
};

// x = calCulate(4, 5);
console.log(calCulate(4, 5)); */

// |> -----------------------------------

/* let douBler = (x) => {
  return x * x;
};

console.log(douBler(5)); */

/* const Greeter = (NameIs, greet) => {
  return `Hello, ${NameIs} ${greet} `;
};

console.log(Greeter("SHanto", "GOOD MORNIG"));
console.log(Greeter("SHanto", "শুভ সকাল"));
console.log(Greeter("SHanto", "Bunjao")); */

// * With Return
/* findLength = (StringIs) => {
  return StringIs.length;
}; */

// * WithOut Return

/* const findLength = (StringIs) => StringIs.length;
console.log(`Sting Length IS: ${findLength("Shanto XYZ")}`); */

// *********************

/* 
let arrayIs = [1, 2, 3, 4, 5];
let modifyEdArray = arrayIs.map(
  (x = (expresion) => {
    return expresion * 3;
  })
); 

console.log(modifyEdArray);
*/

/* let mulArray = arrayIs.map(
  (x = (arrayIsHere) => {
    return arrayIsHere * 3;
  })
); */

/* let arrayIs = [1, 2, 3, 4, 5];

let mulArray = arrayIs.map(function (arrayIsHere) {
  return arrayIsHere * 3;
});

console.log(mulArray); */

// let arrayIs = (arr) => arr.map((num) => num * 3);
// console.log(arrayIs([1, 2, 3]));

// ==========================================================

setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
      console.log("Hello");
      setTimeout(() => {
        console.log("HEllos");
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
