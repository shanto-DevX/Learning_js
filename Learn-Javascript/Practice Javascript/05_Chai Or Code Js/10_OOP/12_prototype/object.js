/* function Mul(sum) {
    this.sum = sum
  return sum * sum;
}

Mul.power = 2;
console.log(Mul(5));
console.log(Mul.power);
console.log(Mul.prototype); */

// console.log(Mul(5));

// ----------------------------
/*
 * .this current CONTEXT
 */
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

/* 
  Here's what happens behind the scenes when the new keyword is used:
  * A "new" object Created: The new keyword initiates the creation of a new Javascript Object
  |> new দিয়ে একটি নতুন একটা অব্জেট তেরি হবে। new keyword এর একটা রেফারেন্স লাগবে এইটা হচ্ছে, function createUser(){}

  * A prototype is Linked:
  * The Constructor is called:
  * The new Object is retured:
*/

// -----------------

/* let arr = [1, 2, 3, 4, 5];

Array.prototype.sum = function () {
  return this.reduce((ace, t) => ace + t, 0);
};

console.log(arr.sum()); */

// https://youtu.be/uMI5cNeHTOc?si=sgzHXQaDkU78urOf&t=1408
