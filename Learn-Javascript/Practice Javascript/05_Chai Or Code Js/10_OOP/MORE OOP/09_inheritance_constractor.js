/* 
    |> Inharitance Constructor

    * -> constructor inside only parent class
    * -> constructor inside only parent class pass parameters
    
    * * -> constructor inside only child class
    * * -> constructor inside only child class pass parameters
    
    * * -> constructor inside both parent & child class
    * * -> constructor inside both child & parent class pass parameters
*/

/* class Parent {}
class child extends Parent {} */

/*
 *  ✅-> constructor inside only parent class
 * |> child class get access in Parent Class with constructor
 */
/* class Parent {
  constructor() {
    console.log("I'm Constractor of Parent Class");
  }
}
class child extends Parent {}

new Parent();
new child(); */

/*

 *  ✅-> constructor inside only parent class pass parameters
 * |> child class get access in Parent Class with constructor & also get access parameter Data
 * |> child & Parent Both get access parameter Data
 
 */
/* class Parent {
  constructor(msg) {
    console.log("I'm Constractor of Parent Class & The message is :" + msg);
  }
}
class child extends Parent {}

new Parent(" Hello World Parent Message");
new child(" Hello World Child Message"); */

/*
 * -> ✅ constructor inside only child class
 * |> Child এর মধ্যে constructor দিতে চাইলে super() কিওয়ার্ড ব্যবহার করতে হবে।
 * |> Child এর মধ্যে constructor দিলে সেইটা পেরেন্ট ক্লাস ব্যবহার করতে পারবে না
 */

/* class Parent {}

class child extends Parent {
  constructor() {
    super();
    console.log("I'm Constractor of Child Class");
  }
}

new Parent();
new child(); */

/*
 * ->✅ * * -> constructor inside only child class & pass parameters
  * |> Child এর মধ্যে constructor দিলে সেইটা পেরেন্ট ক্লাস ব্যবহার করতে পারবে না এবং constructor এ পেরামিটার দিলে সেইটাও পেরেন্ট ক্লাস এক্সেস করতে পারবে না

 */

/* class Parent {}

class child extends Parent {
  constructor(mes) {
    super();
    console.log("I'm Constractor of Child Class & Message is : " + mes);
  }
}

new Parent(" From Parent");
new child(" From Child"); */

/*
    // * * ✅ -> constructor inside both parent & child class
    * |> Child & Parent Class এর মধ্যে constructor দিলে সেইটা উভই পাবে 
    * |> Child constructor কে কল করলে পেরেন্ট এর constructor ও কল করবে এবং Child & Parent এর উভই constructor দেখাবে।

 */
/* class Parent {
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
new child(); */

/*
    // * * -> constructor inside both child & parent class pass parameters
    * |> Child & Parent Class এর মধ্যে constructor এর parameters দিলে সেইটা উভই পাবে 
    * |> Child constructor কে কল করলে পেরেন্ট এর constructor parameters Undefined দেখাবে এবং সুধু চাইল্ড এর parameters প্রিন্ট হবে 
        * - কারনঃ বাবার থেকে ছেলে পাবে কিন্তু ছেলের থেকে বাবা পাবে না। 

 */
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
