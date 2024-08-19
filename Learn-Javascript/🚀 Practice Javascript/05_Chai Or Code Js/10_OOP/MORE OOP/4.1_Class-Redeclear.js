/*
 * একটা ক্লাস একবার ই ডিক্লিয়ার করা যায়
 * একটা ক্লাস আবার বা রিডিক্লিয়ার  করতে হলে প্রয়োজন
 */

/* class sumOf {
  x = 10;
  y = 20;
  addToNum() {
    return this.x + this.y;
  }
}

class sumOf {
  x = 100;
  y = 20;
  addToNum() {
    return this.x + this.y;
  }
}

let sumIs = sumOf();
console.log(sumIs);
 */

// => Class Redeclearation -> class Expression

let sumOf = class {
  x = 100;
  y = 200;
  addToNum() {
    return this.x + this.y;
  }
};
/* let sumOf = class {
  x = 1;
  y = 2;
  addToNum() {
    return this.x + this.y;
  }
}; */

let sumIs = new sumOf();
console.log(sumIs);
