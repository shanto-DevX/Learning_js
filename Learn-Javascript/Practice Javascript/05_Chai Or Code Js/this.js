/* 
    |> this keyword
    
    * this হচ্ছে, একটা অব্জেক্ট এর মধ্যে [key:value] থাকে এখন আমি যদি এর অব্জেক্ট এর মধ্যে কোন key এর ভেল্যু চাই তাহলে this.key এভাবে দিতে হবে এবং এইটা ওই key এর ভেল্যুকে সেইলেক্ট করবে 
    * this হচ্ছে, কোন অব্জেক্ট এর মধ্যে  াছে সেইটা।
    

    * In an object method, this refers to the object.

    * Alone, this refers to the global object.
    * -< browser window the global object is [object Window]
    
    * In a function, this refers to the global object.
    * -< browser window the global object is [object Window]
    * -< function myFunction() {return this; }
    
    * In a function, in strict mode, this is undefined. 
    * -< "use strict";
    
    * In an event, this refers to the element that received the event.
    * -< <button onclick="this.style.display='none'"> এইখানে this হচ্ছে button
    
    * Methods like call(), apply(), and bind() can refer this to any object.

    |> emplictit function builnding
        * Object এর মধ্যে একটি ফাংশন মেথড তেরি করে সেইটাকে this দিয়ে অব্জেক্ট কে সিলেক করা হচ্ছে emplictit function builnding
    |> explictit function builnding
*/

/* let person = {
  firstname: "saiful Islam",
  lastname: "Shanto",
  id: 3548,

  //fullNameIs a methods so need () -< Object Method Binding
  // -> this target on person
  fullNameIs: function () {
    return this.firstname + " " + this.lastname;
  },

  // -> emplictit function builnding |> this target on person
  getFullName: function () {
    return this.fullNameIs();
  },
};

console.log(person.fullNameIs());
console.log(person.getFullName());
console.log(this); */

// |> Explicit Function Binding

/* const p1 = {
  fullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

const p2 = {
  firstname: "saiful Islam",
  lastname: "Shanto",
};

console.log(p1.fullName.call(p2)); */

// ----------------------------------------

/* let user = {
  firstname: "saiful Islam",
  lastname: "Shanto",
  id: 1258,

  // -> এইখানে this সুধু childObje এ এক্সেস পাবে
  childObje: {
    nowLernign: "Javascript",
    getDetails: function () {
      return this.nowLernign + " AND " + this.firstname;
    },
  },
}; */

/* let user = {
  firstname: "saiful Islam",
  lastname: "Shanto",
  id: 1258,

  // -> //this point on window object
  getDetails: () => {
    //   console.log(this.firstname);
    console.log(this); 
  },
};

// user.getDetails(); #undefined
user.getDetails(); */

/* let user = {
  firstname: "saiful Islam",
  lastname: "Shanto",
  id: 1258,
  // -> //this point on user
  getDetails() {
    const nestedArrow = () => console.log(this.firstname);
    nestedArrow();
  },
};

user.getDetails(); */

// * => This in CLass
/* class user {
  constructor(n) {
    this.name = n;
  }

  getname() {
    console.log(this.name);
  }
}

const users = new user("Shanto");
console.log(users);
console.log(users.getname());
 */

// --------------------------------------------------------

// interview Q-1
// -> this Acces On Object
/* const user = {
  firstName: "shantosss",
  getName() {
    const firstName = "Shanto";
    return this.firstName;
  },
};

console.log(user.getName()); */

// interview Q-2
// ->

/* 
function makeUser() {
  return {
    name: "john",
    ref: this, //-> Call window object
  };
} */

/* function makeUser() {
  return {
    name: "john",
    ref() {
      return this;
    },
  };
}

let user = makeUser();
console.log(user.name);
console.log(user.ref);
console.log(user.ref().name); */

/* const user = {
  name: "Shanto",
  logMessage() {
    console.log(this.name);
  },
};

// setTimeout(user.logMessage, 1000);
// -> এইখানে কলবেক ফাংশন এর ফলে logMessage কপি হয়ে setTimeout এ আসছে এবং logMessage এর this window Object এ চলে গেছে তাই কিছু না পেয়ে রেজাল্ট আন্ডিফাইন্ড দিছে

// |> FIxed CODE
setTimeout(function () {
  user.logMessage();
}, 1000); */

// ------------------
/* const user = {
  name: "Shanto",
  greet() {
    // -> this point on user Object
    return `Hello ${this.name}`;
  },

  farewell: () => {
    // -> this pointer on outer scope becouse its arrow function, window object and show Undefiend
    return `Goodbay ${this.name}`;
  },
  farewellX: function () {
    // -> this point on user Object
    return `GoodbayXX ${this.name}`;
  },
};

console.log(user.greet()); // undefind
console.log(user.farewell()); //shanto
console.log(user.farewellX()); //shanto */

// ---------------

let calculate = {
  //   a: 10,
  //   b: 20,

  read() {
    this.a = +prompt("a = ", 0);
    this.b = +prompt("b = ", 0);
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  },
};

console.log(calculate.sum());
console.log(calculate.mul());
