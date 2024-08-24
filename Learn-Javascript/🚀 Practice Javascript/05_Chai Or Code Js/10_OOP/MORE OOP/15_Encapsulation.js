/*
 * Encapsulation 
 * Grouping Data & action একসাথে রেখে একটা বান্ডিল করা হচ্ছে Encapsulation
 * Hiden Complexity
 * Data Protuction
 * Controlled Access
 * Enhances Maintainbility
 
 |> HOW ACHIVE Incapculation
    * closures 
    * Constructor 
    * ES6 Class 
 */

// |> => Encapsulation  Using closures'

/* function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },

    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());

counter.decrement();
counter.decrement();
console.log(counter.getCount()); */

// |> => Encapsulation  Using ES6

/* class createCounter {
  #count = 0;
  increment() {
    this.#count++;
  }
  decrement() {
    this.#count--;
  }
  getCount() {
    return this.#count;
  }
}

let numIs = new createCounter();
numIs.increment();
numIs.increment();
numIs.increment();
numIs.increment();
numIs.increment();
console.log(numIs.getCount());

numIs.decrement();
numIs.decrement();

console.log(numIs.getCount()); */

// |> => Encapsulation Using Constructor Functions

function createCounter() {
  let count = 0;

  this.increment = () => {
    count++;
  };

  this.decrement = () => {
    count--;
  };

  this.getCount = () => {
    return count;
  };
}

let num = new createCounter();
// console.log(num);

num.increment();
num.increment();
num.increment();
num.increment();
num.increment();
console.log(num.getCount());
num.decrement();
num.decrement();
console.log(num.getCount());
