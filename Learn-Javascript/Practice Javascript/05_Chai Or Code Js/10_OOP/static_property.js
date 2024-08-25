class User {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`Username : ${this.username}`);
  }

  //   static সবাই এইটার এক্সেস পাবেনা।
  static createId() {
    return `123`;
  }
}

const user1 = new User("Shanto");
// console.log(user1.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const user2 = new Teacher("Shantos", "Shantos@gmail.com");
console.log(user2);
user2.logme();
console.log(user2.createId());
