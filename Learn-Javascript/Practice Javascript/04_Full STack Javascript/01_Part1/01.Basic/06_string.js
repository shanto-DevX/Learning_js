// String
// let fristName = "Shanto";
// let secondName = " WebDev";
// let thirdName = ` & Programmer`;

// -> 1.Concatenation
// let fullName = fristName + secondName + thirdName;
// let fullName = fristName.concat(secondName.concat(thirdName));
// console.log(fullName);

// -> 2. append
// let fristName = "Saiful Islam";
// fristName += " Add Something";
// console.log(fristName);

// -> 3. length

// let nameIs = "Saiful islam shanto";
// console.log(nameIs.length);

// -> 4. case
// let nameIs = "Saiful islam shanto";
// console.log(nameIs.toUpperCase());
// console.log(nameIs.toUpperCase());

// -> 5. slice |> ৫ পর্যন্ত দেখতে হলে ৬ দিতে হবে
// let nameIs = "Saiful islam shanto";
// console.log(nameIs.slice(0, 6));

// -> 6. split & join
// let nameIs = "Saiful islam shanto";
// console.log(nameIs.split("."));
// console.log(nameIs.split(" "));
// console.log(nameIs.split(""));
// console.log(nameIs.split(" ").join(""));
// console.log(nameIs.split(" ").join(" "));
// console.log(nameIs.split(" ").join("-"));
// console.log(nameIs.split(" ").join("."));

// -> 6. includes
// let nameIs = "Saiful islam shanto";
// console.log(nameIs.includes("i"));
// console.log(nameIs.includes("shanto"));
// console.log(nameIs.includes("z"));

// -> 7. trim
// let nameIs = "       Saiful islam shanto       ";
// -> Write multiline use ``
/* let nameIs = `Saiful 
islam 
shanto`;
console.log(nameIs.trim(" ")); */

/* let firstNameIs = "Saiful islam";
let SecondNameIs = " shanto";
let fullNameIs = `${firstNameIs} ${SecondNameIs} is a programmer`;
console.log(fullNameIs); */

// ===============================

let favProgramming = "python";

let firstName = "java";
let lastName = "script";
console.log(firstName.concat(lastName));
console.log(firstName.concat(lastName).toUpperCase());

let message = `My Favorite Programming Language is ${favProgramming.toUpperCase()} `;

message += "Best for AI";
console.log(message);
