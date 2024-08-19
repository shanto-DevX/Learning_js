// Class

/* class person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
} */

class person {
  _name = "Shanto";
  age = 24;
  city = "narayanganj";
  isLogin = true;

  getName() {
    return `my name is ${this._name}`;
  }
}

let person1 = new person();
console.log(person1._name);
console.log(person1.age);
console.log(person1.city);
console.log(person1.isLogin);
console.log(person1.getName());
