/*
 * getter Setter

    |> class এর মধ্যে ভেল্যু সেট করতে বা গেট করতে getter Setter ব্যবহার হয়ে থাকে
    |> get দিলে Set ও দিতে হবে
    |> get constractor এর থেকে ভেল্যু নিয়ে থাকে 
    |> constracor value Name & get set methods Name Same সাথে হবে 
    |> set এর মধ্যে ভ্যেলু এড করে দিতে হবে ->  set email(e) {}

    * RangeError: Maximum call stack size exceeded
    |> get & set এর রেফারেন্স "this.password" দিলে call stack এ গিয়ে constructor এর ভেল্যু এবং get & set এর ভ্যেলু তে কনফিলিক্ট হয় এবং কোনটা আগে সেট হবে বা পরে সেট হবে সেইটা নিয়ে সমস্যা হয় এবং call stack size exceeded হয়ে যায়

    |> এই সমস্যা সমাধান এর জন্য রেফারেন্স ভেল্যু এর আগে _ দিতে হবে 
        * this._password
        * get & Set এ 
*/

/* class Users {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // Error => Cannot set property password of #<Users> which has only a getter
  // get দিলে set ও দিতে হয়।
  get password() {
    // ⬇️ Maximum call stack size exceeded
    // return this.password.toUpperCase();

    return this._password.toUpperCase();
  }

  set password(x) {
    // ⬇️ Maximum call stack size exceeded
    // return (this.password = x);

    return (this._password = x);
  }
} */

/* class Users {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(e) {
    return (this._email = e);
  }

  get password() {
    // return this._password.toUpperCase();
    return `${this._password.toUpperCase()} NewPass`;
  }

  set password(x) {
    return (this._password = x);
  }
}

const user1 = new Users("hi@gmail.com", "abcd");
console.log(user1);
console.log(user1.password);
console.log(user1.email); */

// |><> Practice

class usersInfo {
  constructor(names, email) {
    this.names = names;
    this.email = email;
  }

  get names() {
    return this._names.toUpperCase();
  }

  set names(value) {
    this._names = value;
  }
}

const user1 = new usersInfo("shanto", "hi@gmail.com");
console.log(user1);
console.log(user1.names);

// ---------------------------------------------------------
// -------------- OLD WAY TO GETTER & SETTER -------------
// ---------------------------------------------------------
// |> Function Based -- defineProperty => Getter Setter
/* function user(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return `This is Password: ${this._password}XYZ`;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const user1 = new user("hello@gmail.com", "1234");
console.log(user1);
console.log(user1.email);
console.log(user1.password); */
