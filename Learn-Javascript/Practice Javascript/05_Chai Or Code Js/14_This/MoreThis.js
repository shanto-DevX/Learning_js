// |> Global Context
// console.log(this);
// console.log(window === this);

/* function helloThis() {
  `use strict`;
  console.log(this);
}

helloThis(); */
/* function helloThis() {
  console.log(this);
}

helloThis(); */

/* function unNamed() {
  this.name = "Saiful islam shanto";
}

unNamed();
console.log(); */

/* function unNamed() {
  `use strict`;
  this.name = "Saiful islam shanto";
}

unNamed(); */

// |> Object
// -> যেই অব্জেক্ট এর মধ্যে this টার্গেট থাকবে সেই অব্জেক্ট এর ডাটা দেখাবে।

/* let myInfo = {
  name: "Shanto",
  Learning: "Js This keyword",

  msg: function () {
    console.log(this);
  },
};

myInfo.msg(); */

/* let myInfo = {
  name: "Shanto",
  Learning: "Js This keyword",
  newFunc: {
    name: "Shantos",
    msg: function () {
      console.log(this);
      console.log("My Name is : " + this.name);
    },
  },
};

myInfo.newFunc.msg(); */

// -------------

/* const a = {
  name: "wasef",
  foo: function () {
    console.log(this);
  },
};

a.foo(); */

/* function foo() {
  console.log(this);
}

foo(); */

/* const a = {
  name: "wasef",
  foo: function () {
    console.log(this);
  },
};

const newFoo = a.foo;
newFoo(); */
// -------------------------
// -> Call / Bind / Apply

/* let myInfo = {
  name: "Shanto",
  Learning: "Js This keyword",
  newFunc: {
    name: "Shantos",
    msg: function () {
      console.log(this);
      // console.log("My Name is : " + this.name);
    },
  },
};

myInfo.newFunc.msg(); */

// -----------------------------------------------------
/*
 * => Implicit Binding
 * => Explicit Binding
 * => new Binding
 * => window Binding
 */

/* 
//  * => Implicit Binding
  |> এইটা কাজ এভাবে
  * প্রথমে দেখে Object এর মধ্যে ফাংশন যেইটা কল হচ্ছে কত নাম্বার লাইনে
  * এর মধ্যে, ফাংশন এর পরে কোন নটেশন আছে কিনা, এর পরে যেইটা আছে সেইটার মধ্যে  this দিয়ে রেফার করে
  * 
*/

let programming = {
  name: "javascript",
  age: "OneYers",
  practiceFunc: function () {
    console.log(this.name);
  },
};

programming.practiceFunc();
