/* let x = "Hello";
let y = " world";
let result = x.concat(y);

console.log(result); */

let concatStr = (str1, str2) => {
  //   return str1.concat(str2);
//   return str1.slice(0) + str2.slice(0);
  return str1.slice(1) + str2.slice(1);
};

console.log(concatStr("Hello", " World"));
