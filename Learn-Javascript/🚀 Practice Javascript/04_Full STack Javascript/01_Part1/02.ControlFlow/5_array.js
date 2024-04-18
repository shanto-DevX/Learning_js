// -> Arrays |> 0 index based

// let fruits = ["Orange", "Apple"];

// |> Empty Array
// const myList = [];
// console.log(myList);

// |> Array
/* const numberArray = [1, 2, 3, 4, 5];
console.log(numberArray);
console.table(numberArray); */

/* const StringArray = ["A", "E", "I", "O", "U"];

for (let x = 0; x < StringArray.length; x++) {
  console.log(x, StringArray[x]);
} */

// console.log(StringArray[0]);
// console.log(StringArray[1]);
// console.log(StringArray[2]);
// console.log(StringArray[3]);
// console.log(StringArray[4]);
// console.log(StringArray);

//  |> Two Dimentional|| Nested Array

/* const NestArray = ["One", ["Two", "Three"], 1, true, false];
console.log(NestArray);
console.log(NestArray[1]);
console.log(NestArray[1][1]); */

// |> ------------------------------------------

/* let favProgrammingLang = ["c", "c++", "Javascript", "python"];
console.log(favProgrammingLang[0]);

let favNum = [4, 47, 87, 47];
console.log(favNum);

let mixedArr = ["Shanto", ["Hello", "Shanto"], 123, true];
console.log(mixedArr[0]);
console.log(mixedArr[1]);
console.log(mixedArr[1][0]);
console.log(mixedArr[1][1]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);
 */

// |> ArrayMethods

// * => Concat()

/* let arry1 = [1, 2, 3, 4];
let arry2 = [5, 6, 7, 8];
let x = arry1.concat(arry2);
console.log(x); */

// * => includes() |> Show True/False

/* let arry1 = [1, 2, 3, 4];
let x = arry1.includes(2);
console.log(x); */

// * => push() |> add elemnt last in array

/* let arry1 = [1, 2, 3, 4];
arry1.push(5);
console.log(arry1); */

// * => pop() |> Remove elemnt in array

/* let arry1 = [1, 2, 3, 4];
arry1.pop(3);
console.log(arry1); */

// * => sort() |> sort elemnt in array <| ascending Order [1,2,3,4...] / [a,b,c,...]

// let arry1 = [1, 3, 2, 4, 8, 7, 5];
/* let arry1 = ["d", "a", "c", "b"];
arry1.sort();
console.log(arry1); */

// * => unshift() |> add elemnt first in  array

/* let arry1 = [1, 2, 3, 4];
arry1.unshift(5);
console.log(arry1);
 */

//* => shift() |> Remove First Element

/* let arry1 = [1, 2, 3, 4];
arry1.shift();
console.log(arry1); */

//* => join() |> join array

/* let arry1 = [1, 2, 3, 4];
let arry2 = [5, 6, 7, 8, 9];
console.log(arry1.join("-"));
console.log(arry2.join("-")); */

//* => reversed() |> Reverse array

/* let arry1 = [1, 2, 3, 4];
console.log(arry1.reverse()); */

//* => slice() |> select the part of an array and return the new array

let arry1 = [1, 2, 3, 4];
console.log(arry1);

arry1.slice(); //-> COPY from array 1
arry1.push(5);
console.log(arry1);

/* 
//* => splice() |> remove or replace existing elements and/or new element

let arry1 = [1, 2, 3, 4];
let arry2 .splice();
console.log(arry2);
 */
