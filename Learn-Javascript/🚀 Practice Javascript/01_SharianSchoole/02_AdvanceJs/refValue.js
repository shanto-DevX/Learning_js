// -> How to COpy Reference Values

// -> spread Operator
// * [...] দিয়ে যেইটা লেখা হবে সেখানে ডাটা কপি হয়ে যাবে :- যেমনঃ a এর ভেলু b তে কপি হয়ে যাবে *
/* var a = [1, 2, 3, 4, 5];
var b = [...a];

console.log(a);
console.log(b);

b.pop();
console.log(b); */

// ====================================

var obj = {
  nameIs: "Shanto",
  age: 24,
  depertment: "CMT",
};

console.log(obj);

var copyObj = {
  ...obj,
};

console.log(copyObj);

copyObj.nameIs = "ShantoStudio";
console.log(copyObj);
