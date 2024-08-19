/*
 *
 */

class users {
  constructor(username) {
    this.username = username;
  }

  //   add a method for give us username Value
  logme() {
    console.log(`USERNAME IS : ${this.username}`);
  }
}

/*
 * extends করে users এর ডাটা Teacher ক্লাসে চলে আসলো।
 * super() কিওয়ার্ড ব্যবহার করে users এর constructor থেকে username, Teacher ক্লাসে পাবে। এবং username Teacher এর constructor এ থাকতে হবে।
 */

class Teacher extends users {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCouse() {
    console.log(`A New COurse was added by ${this.username}`);
  }
}

const users1 = new Teacher("Shanto", "Shanto@gmail.com", "1234");

//|> inharite করে users এর মেথড logme একখানে কাজ করে।
users1.logme();
users1.addCouse();

const users2 = new users("Saiful");
users2.logme();
// users2.addCouse();

console.log(users1 instanceof users);
console.log(users1 instanceof Teacher);
