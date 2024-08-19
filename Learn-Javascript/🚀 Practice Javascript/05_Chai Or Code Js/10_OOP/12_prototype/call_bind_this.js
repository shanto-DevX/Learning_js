/* 
    * call / bind / apply
    * this
    ---------------------------------
    * window = {this = window}
    * node = {}
    
    ----------------------------------
    |                                |
    ----------------------------------
    |                                |
    ----------------------------------
    |                                |
    ----------------------------------
    |                                |
    ----------------------------------
    |                                |
    ----------------------------------
    |                                |
    ----------------------------------
    |                                |
    ----------------------------------
    
*/
// |> একটা ফাংশন থেকে অন্য ফাংশন এ ডাটা এক্সেস নিতে funcName.call(this,parameter) দিতে হয় এবং এতে করে এক ফাংশন এর parameter ডাটা অন্য ফাংশন এ ব্যবহার করা যায়।
// |> Call

/* function setUserName(userName) {
  // complex DB Calls
  this.username = userName;
  console.log("Called");
}

function createUser(username, email, password) {
  //   this.username = username;
  //   setUserName(username);
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const users1 = new createUser("shanto", "shanto@gmail.com", "123");
console.log(users1); */

// ------------------------------------

function userInfo(userName, userId) {
  this.userName = userName;
  this.userId = userId;
}

function createUser(userName, userId, email, password) {
  userInfo.call(this, userName, userId);
  // userInfo.call(this, userId);

  this.email = email;
  this.password = password;
}

let user1 = new createUser("Shanto", "7", "shanto@gmail.com", "1234");
console.log(user1);
