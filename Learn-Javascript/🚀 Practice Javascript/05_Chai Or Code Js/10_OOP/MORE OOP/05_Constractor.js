/*
 * Constructor
 * |> Constructor name should be Constructor
 * |> Constructor automatic execute when object is created
 * |> Constructor take Parameter
 * |> Constructor method can't retrun any result
 */

/* class person {
  constructor() {
    console.log(`i'm a  Constructor method`);
  }
}

let personObj = new person();
// console.log(personObj); */

// -----------------------------------------------------------------

/*========================================
    Constructor Parameter & Add value
=========================================*/

/* class person {
  constructor(name, age) {
    console.log(`My Name is ${name} & my Age is ${age}`);
  }
}

let personObj = new person("shanto", 24); */

/* class personInfo {
  constructor(nameIs, isLogin) {
    console.log(`Name is : ${nameIs} & Is login ${isLogin}`);
  }
}

let personObje = new personInfo("Shanto", true);
// console.log(personObje); */

/*========================================
    Constructor Parameter value change
=========================================*/

class person {
  num1 = 10;
  num2 = 20;

  constructor(a, b) {
    this.num1 = a;
    this.num2 = b;
  }

  addTwoNum() {
    return this.num1 + this.num2;
  }
}

let personObj = new person(10, 100);
console.log(personObj);
console.log(personObj.addTwoNum());
