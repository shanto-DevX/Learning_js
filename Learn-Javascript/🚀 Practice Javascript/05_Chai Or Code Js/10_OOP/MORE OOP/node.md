# OOP

---

## ✨ Object

### Object Create in 3 way

- Object literal
- Object instance
- Object with constractor

##### Object literal

```js
let myOBJ = {
  firstName: "Saiful Islam",
  lastName: "Shanto",
  age: 24,
  learning: "Javascript",

  getFUllName: () => {
    return `my Full Name Is ${myOBJ.firstName} ${myOBJ.lastName}`;
  },
};

console.log(myOBJ);
console.log(JSON.stringify(myOBJ));
console.log(myOBJ.getFUllName());
```

##### Object instance

```js
// let person =  Object();

let person = new Object();
person.firstName = "Saiful islam";
person.lastName = " Shanto";
person.city = " Narayanganj";
person.isLogin = true;
person.getName = () => {
  return `my Name is ${person.firstName} ${person.lastName}`;
};

console.log(person.firstName + person.lastName);
console.log(person.getName());
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
```

##### Object with constractor

```js
function person() {
  this._name = "Shanto";
  this.age = 24;
  this.city = "narayanganj";
  this.isLogin = true;

  this.getName = () => {
    return `my Name is ${this._name} & my City is ${this.city}`;
  };
}

// let personInfo = new person();
let personInfo = new person();
console.log(personInfo);
console.log(personInfo._name);
console.log(personInfo.getName());
```

- কোন একটি ফাংশন ব্যবহার করে,ওই function এর যে নাম ধরে যেই অব্জেক্ট তেরি করবো সেইটা হচ্ছে Constractor এর মাধ্যমে অব্জেক্ট তেরি করা

---

## ✨ Class

```js
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
```

## ✨ class Constructer

- Constructor
- Constructor name should be Constructor
- Constructor automatic execute when object is created
- Constructor take Parameter
- Constructor method can't retrun any result

```js
class personInfo {
  constructor(nameIs, isLogin) {
    console.log(`Name is : ${nameIs} & Is login ${isLogin}`);
  }
}

let personObje = new personInfo("Shanto", true);
```

## ✨ getter & Setter

- 📝 setter is set the value & Getter get the set Value from setter value
- 📝 Setter need value in Parameter
- 📝 Getter no need value in Parameter & return setter value
- 📝 setter value is special method & assign value using = assingment Operator

```js
class personInfo {
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
```

---

## ✨ Static Keywords

- 📝 ক্লাস থেকে কোন প্রোপারটি Object তেরি না করে এক্সেস করতে চাইলে Static Keyword ব্যবহার করা যাবে
- 📝 Shared Peroperties -> ক্লাসের মধ্যে কোন function বিভিন্ন্য যাগায় ব্যবহার করতে চাইলে Static Keyword ব্যবহার করে সেইটা করা যায়
- 📝 Utility Fucntion -> from Validition
- 📝 Memory Efficiency

```js
class person {
  static firstName = "saiful islam ";
  static lastName = "shanto";

  static getInfo() {
    return `my Name is ${this.firstName} ${this.lastName}`;
  }
}

/* let personObj = new person();
console.log(personObj);
console.log(personObj.getInfo()); */

console.log(person.firstName);
console.log(person.lastName);
console.log(person.getInfo());
```

---

## ✨ Inheritance

- উত্ররাধিকার সূত্রে পাওয়া কোন কিছুকে Inheritance বলে।
- ParentClass এর ডাটা childClass ক্লাস এক্সেস দিতে চাইলে ParentClass ক্লাস কে extends করতে হবে।
  `class childClass extends ParentClass {}`

```js
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
```

---

## ✨ Inheritance Constructor with Parameter

       ✨ constructor inside only parent class
       ✨ constructor inside only parent class pass parameters

       ✨ constructor inside only child class
       ✨ constructor inside only child class pass parameters

       ✨ constructor inside both parent & child class
       ✨ constructor inside both child & parent class pass parameters

---

- 👉 constructor inside only parent class
  - 📝 child class get access in Parent Class from constructor

```js
class Parent {
  constructor() {
    console.log("I'm Constractor of Parent Class");
  }
}
class child extends Parent {}

new Parent();
new child();
```

---

- 👉 constructor inside only parent class pass parameters
  - 📝 child class get access in Parent Class with constructor & also get access parameter Data
  - 📝 child & Parent Both get access parameter Data

```js
class Parent {
  constructor(msg) {
    console.log("I'm Constractor of Parent Class & The message is :" + msg);
  }
}
class child extends Parent {}

new Parent(" Hello World Parent Message");
new child(" Hello World Child Message");
```

---

- 👉 ✅ constructor inside only child class
  - 📝 Child এর মধ্যে constructor দিতে চাইলে super() কিওয়ার্ড ব্যবহার করতে হবে।
  - 📝 Child এর মধ্যে constructor দিলে সেইটা পেরেন্ট ক্লাস ব্যবহার করতে পারবে না

```js
class Parent {}

class child extends Parent {
  constructor() {
    super();
    console.log("I'm Constractor of Child Class");
  }
}

new Parent();
new child();
```

---

- 👉 ✅ constructor inside only child class & pass parameters
  - 📝 Child এর মধ্যে constructor দিলে সেইটা পেরেন্ট ক্লাস ব্যবহার করতে পারবে না এবং constructor এ পেরামিটার দিলে সেইটাও পেরেন্ট ক্লাস এক্সেস করতে পারবে না

```js
class Parent {}

class child extends Parent {
  constructor(mes) {
    super();
    console.log("I'm Constractor of Child Class & Message is : " + mes);
  }
}

new Parent(" From Parent");
new child(" From Child");
```

---

- 👉 constructor inside both parent & child class
  - 📝 Child & Parent Class এর মধ্যে constructor দিলে সেইটা উভই পাবে
  - 📝 Child constructor কে কল করলে পেরেন্ট এর constructor ও কল করবে এবং Child & Parent এর উভই constructor দেখাবে।

```js
class Parent {
  constructor() {
    console.log("I'm Constractor of Parent Class");
  }
}

class child extends Parent {
  constructor() {
    super();
    console.log("I'm Constractor of Child Class");
  }
}

new Parent();
new child();
```

---

- 👉 constructor inside both child & parent class pass parameters
  - 📝 Child & Parent Class এর মধ্যে constructor এর parameters দিলে সেইটা উভই পাবে
  - 📝 Child constructor কে কল করলে পেরেন্ট এর constructor parameters Undefined দেখাবে এবং সুধু চাইল্ড এর parameters প্রিন্ট হবে
    - কারনঃ বাবার থেকে ছেলে পাবে কিন্তু ছেলের থেকে বাবা পাবে না।

```js
class Parent {
  constructor(msg) {
    console.log("I'm Constractor of Parent Class & Message : " + msg);
  }
}

class child extends Parent {
  constructor(msg) {
    super();
    console.log("I'm Constractor of Child Class & Message : " + msg);
  }
}

// new Parent(" Message From Parent");
new child(" Message From Child");
```
