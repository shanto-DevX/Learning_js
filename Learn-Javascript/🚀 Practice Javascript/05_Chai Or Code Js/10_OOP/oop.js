// Classes and OOP
// --------------------------
/* 
    * Object Litarals

*/

/* const user = {
  userName: "Shanto",
  loginCount: 8,
  signIn: true,

  // create Methods
  getUserDetails: function () {
    //console.log("Got User Details From Database");
    // console.log(`username : ${userName}`); |> Throw ERROR
    // console.log(`username : ${user.userName}`);
    // console.log(`username : ${this.userName}`);
    console.log(this);
  },
};

console.log(user.userName);
//console.log(user.getUserDetails());
// console.log(this); //* User Browser Consol FOr more Details
 */
// ----------------------------------------------------------------

// -> Constractor Function

// const promiseOne = new Promise();
// const DateOne = new Date();

/*
 * |> new keyword
 * -> empty Object create হয়, এইটাকে ইন্সটেন্স বলা হয়
 * -> নতুন অব্জেট তেরি হয়
 * -> Constractor Function কল হয় new keyword এর জন্য
 * -> this এর মধ্যে অব্জেক্ট এর ডাটা ইঞ্জেক্ট হয়
 * -> Fucntion এর
 */

function user(userName, loginCount, isLogin) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLogin = isLogin;

  this.greeting = function () {
    console.log(`Welcome ${this.userName}`);
  };

  return this;
}

const user1 = new user("shanto", 12, true);
const user2 = new user("saiful", 11, false);
// console.log(user1);
// console.log(user2);
console.log(user1.constructor);
