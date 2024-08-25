/* 
    * Inheritance
    |> 
*/

class ParentClass {
  num1 = 10;
  num2 = 20;
  addNumber() {
    let sum = this.num1 + this.num2;
    console.log(sum);
  }
}
class childClass extends ParentClass {
  // -> Inherite হয়েগেছে extends এর মাধ্যমে।
}

let childObj = new childClass();
console.log(childObj);
console.log(childObj.num1);
console.log(childObj.num2);
childObj.addNumber();

let parentclassInfo = new ParentClass();
console.log(parentclassInfo);
console.log(parentclassInfo.num1);
console.log(parentclassInfo.num2);
parentclassInfo.addNumber();
