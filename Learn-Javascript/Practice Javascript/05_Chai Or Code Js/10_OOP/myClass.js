// es6

/*
 * যখন ক্লাস থেকে অব্জেক্ট ইনিশিয়ালাইজ হবে (new keyword) তখন constructor নিজে নিজে কল হয়ে থাকে
 */

/* class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password} abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new user("shanto", "shanto@gmail.com", "1345");

console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUsername()); */

// -> Behind The Scene

/* function users(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

users.prototype.encryptPassword = function () {
  return `${this.password} abc`;
};

users.prototype.upperUser = function () {
  return `${this.username.toUpperCase()} `;
};

const user1 = new users("shanto", "shanto@gmail.com", "1345");

console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.upperUser()); */

// https://youtu.be/u6mVHkMpoMk?si=ITQaVu79N9ohVGTb&t=605

// =====================================================================

/* class users {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  changeUserName() {
    return `Change User Name To UpperCase : ${this.userName.toUpperCase()}`;
  }
} */

/* function users(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

users.prototype.changeUserName = function () {
  return `Change User Name To UpperCase : ${this.userName.toUpperCase()}`;
}; */

/* let user1 = new users("Shanto", "shanto@gmail.com", "1234");
console.log(user1);
console.log(user1.changeUserName()); */
