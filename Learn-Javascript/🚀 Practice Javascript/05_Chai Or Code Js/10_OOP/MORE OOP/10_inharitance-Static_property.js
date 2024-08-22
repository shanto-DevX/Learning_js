/*
 * static দিলে parent এর মেথড access করা যাবে
 * static দিলে parent এর মেথড access করা যাবে এবং child ও মেসেজ এক্সেস পাবে
 * console.log(parent.greetParent());
 * console.log(child.greetParent());
 --------------------------------------------------
 * static দিলে Child এর মেথড access করা যাবেয়া
 * static দিলে Child এর মেথড access করা যাবে এবং parent Child এর এক্সেস পাবে না
 * console.log(child.greetChild());
 * console.log(parent.greetChild());
 */

class parent {
  static greetParent() {
    return `Hello, i'm the Parent Class`;
  }
}

class child extends parent {
  static greetChild() {
    return `Hello, i'm the Child Class`;
  }
}

// console.log(parent.greetParent());
// console.log(child.greetParent());
console.log(child.greetChild());
console.log(parent.greetChild());
