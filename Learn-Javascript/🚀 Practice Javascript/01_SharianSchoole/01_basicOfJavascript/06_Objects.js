/* //->  var a = {} -> Blank OBJECT

// -> FILLED OBJECT
let PersonInfo = {
  Name: "Shanto",
  age: 24,
  Education: "Diploma",
  //-> Method
  //   moreInfo: function () {},
};

PersonInfo.Name = "Saiful Islam Shanto";
console.log(PersonInfo);
console.log(PersonInfo.age);
 */

// Delete Object

let PersonInfo = {
  Name: "Shanto",
  age: 24,
  Education: "Diploma",
};

delete PersonInfo.age;
console.log(PersonInfo);
