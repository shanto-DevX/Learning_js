const User = {
  _name: "shanto",
  _email: "shanto@gmail.com",
  _passWord: "123",

  get email() {
    return `Get EMail: ${this._email.toUpperCase()}`;
  },

  set email(value) {
    this._email = value;
  },
};

// => factory function: Object.create()
const tea = Object.create(User);
console.log(tea);
console.log(tea.email);
