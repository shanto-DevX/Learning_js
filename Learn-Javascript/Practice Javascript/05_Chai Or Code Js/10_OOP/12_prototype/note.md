# Javascript ProtoType

---

### What is ProtoType

> - Javascript এর একটা আচরণ হচ্ছে ProtoTypical বিহেভিয়ার/আচরণ।
> - ✨ কোন কাজ দিলে Javascript চাইল্ড থেকে Parent এভাবে এক্সেস নিয়ে খুজতে থাকে এবং NULL Value না হওয়া পর্যন্ত খুজতে থাকে এবং NULL Value হলে বন্ধ করে দেয়।
> - new / this / class / ProtoTypical Inharitance ProtoType এর মাধ্যমে পাওয়া যায়।

> > - Array --> Object --> Null
> > - String --> Object --> Null
> > - function --> Object --> Null
> >
> > * Function নিজেও একটি অব্জেক্ট । এইটা Function এর মত আচরণ করে এবং আবার (.) দিয়ে প্রটোটাইপ এক্সেস করা যায়।

```javascript
function Mul(sum) {
  return sum * sum;
}

Mul.power = 2;
console.log(Mul(5));
console.log(Mul.power);
console.log(Mul.prototype);
```

---

### ওব্জেক্ট এর মধ্যে মেথড বানানোর নিয়ম।

- Object এর হায়ার Parent এর কাছে shanto অব্জেক্ট তেরি হয়ে গেছে এখন এইটা function / array / string এর মধ্যে এক্সেস করা যাবে।

---

```javascript
// অব্জেক্ট এর মধ্যে একটা মেথড এড করতে। heroPower.shanto()

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderMan: "sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is ${this.spiderMan}`);
  },
};

Object.prototype.shanto = function () {
  console.log("Shanto is present in all object");
};

heroPower.shanto();
```

---

- array এর মধ্যে আলাদা মেথড তেরি করা হইয়েছে এবং এইটা অন্য অজেক্ট / ফাংশন এ কাজ করবে না। সুধু array তে কাজ করবে।

```javascript
let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderMan: "sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is ${this.spiderMan}`);
  },
};

Array.prototype.heyShanto = function () {
  console.log(`shanto say hello `);
};

myHeros.heyShanto();
```

---

```javascript
// -> create a method for string
let anotherName = "shanto    ";
String.prototype.trueLenght = function () {
  console.log(`${this}`);
  console.log(`True lenght is: ${this.trim().length}`);
};

anotherName.trueLenght();
"hello   ".trueLenght();
```

---

### Prototypical inharitance

> একটা ওব্জেক্ট এর ডাটা আরেক ওব্জেক্ট এর মধ্যে ব্যবহার করতে **prototype** ব্যবহার করা হয়ে থাকে।

- দুইভাবে এ কাজ করা যায়।

```javascript

// * আগের নিয়মে। __proto__ দিয়ে ওব্জেক্ট এক্সেস করা হয়
// OLD syntext: __proto__ : ObjectName
const user = {
  name: "shanto",
  email: "shanto@google.com",
};
const Teacher = {
  makevideo: true,
};

const TeachingSUpport = {
  isAvailablee: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSUpport,
};

Teacher.__proto__ = user;

> Teacher এর মধ্যে user এর ডাটা এক্সেস করা যাবে।

```

```javascript

// |> modern syntext: Object.setPrototypeOf(x,y)

const user = {
  name: "shanto",
  email: "shanto@google.com",
};
const Teacher = {
  makevideo: true,
};

const TeachingSUpport = {
  isAvailablee: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSUpport,
};

// modern Syntax
/*
 * hasOwnProperty
 * isPrototypeOf
 * propertyIsEnumerable
 * setPrototypeOf
 */

Object.setPrototypeOf(TeachingSUpport, Teacher);

> Teacher এর মধ্যে TeachingSUpport এর ডাটা এক্সেস করা যাবে।

```

---

### new keyword

Here's what happens behind the scenes when the new keyword is used:

> - A "new" object Created: The new keyword initiates the creation of a new Javascript Object
>   > new দিয়ে একটি নতুন একটা অব্জেট তেরি হবে। new keyword এর একটা রেফারেন্স লাগবে এইটা হচ্ছে, function createUser(){}
> - A prototype is Linked:
> - The Constructor is called:
> - The new Object is retured:

```javascript
function createUser(userName, score) {
  this.username = userName;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const a = new createUser("Hekko", 25);
const b = new createUser("HekkNo", 255);

a.printMe();
```

#### More Learn
* new keyword
* .this keyword