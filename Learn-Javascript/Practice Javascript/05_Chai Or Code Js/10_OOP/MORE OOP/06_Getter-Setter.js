/* 
    |> Getter -
    * get value in getter
    * set value in setter
    *
    -> setter
    |> need value in perameter
    -> Getter
    |> getter no need value in perameter

*/

/* class person {
    // -> SetValue
  set setprice(value) {
    this.price = value;
  }
    // -> Get the set Value
  get getPrice() {
    return this.price;
  }
}

let productObj = new person();

productObj.setprice = 100;

console.log(productObj);
console.log(productObj.getPrice); */

// 1:14:59

/* class personInfo {
  set info(name) {
    this.name = name;
    this.age = age;
  }

  get getPersonInfo() {
    return this.name;
  }
}

let personInfoIs = new personInfo();
personInfoIs.name = "Shanto";
console.log(personInfoIs);
console.log(personInfoIs.getPersonInfo);
 */

class personInfo {
  set personName(name) {
    this.name = name;
  }

  get showPersonIndo() {
    return this.name;
  }
}

let x = new personInfo();
x.name = "shanto";
console.log(x);
console.log(x.showPersonIndo);
