/*
 * incapculation
 * Grouping Data & action একসাথে রেখে একটা বান্ডিল করাকে বলে incapculation
 * Hides Complexity
 * Data Protuction
 * Controlled Access
 * Enhances Maintainbility
 * 
 |> HOW ACHIVE Incapculation
    * Clousers 
    * Constructor 
    * ES6 Class 
 */

//  => Encapculation Using Closures'

function createCounter() {
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
console.log(counter.getCount());
