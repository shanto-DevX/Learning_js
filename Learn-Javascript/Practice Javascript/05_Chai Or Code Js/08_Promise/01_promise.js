/* 

// promise Creation
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async Task
  // DB Calls, cryptography, netwrok

  setTimeout(function () {
    console.log("Async Task Is Complete");
    resolve();
  }, 1000);
});

// Consumed

//  * var.then() => এইটা কানেক্ট resolve এর সাথে
//  *  এর মধ্যে কিছু রান করলে, প্রথমে কানেট করতে হবে  resolve() মেথড .then এর মধ্যে।
//  * এবার যখন রান করবে, তখন প্রথমে async রান হবে এর পরে promise Consumed হবে।

promiseOne.then(function () {
  console.log("Promise Consumed");
});  */

/* //* Create & Consume Promise without add any variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task - 2 Is Complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
}); */

//* promise Create / consumtion / dataPass
/* const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promies 3 Complete!");
    // peramerter pass হয়, অব্জেক্ট আকারে।
    resolve({ userName: "Shanto", email: "Letsworkwith.shanto@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
}); */

/* 
// create Promise
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asysnc task is complete");
    // resolve Connecet the then CallBack Function
    // resolve();
  }, 1000);
});

// Consume
promiseOne.then(function () {
  console.log("Promise Consumed");
});
 */

// create promise without variable

/* new Promise(function (resolve, Reject) {
  setTimeout(function () {
    console.log("Task Complete Async");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise Consume Done");
}); */

/* // promise Create / consumtion / dataPass
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promies 3 Complete!");
    // peramerter pass হয়, অব্জেক্ট আকারে।
    resolve({ userName: "Shanto", email: "Letsworkwith.shanto@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
}); */

/* let promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Complete");
    resolve({ userName: "Shanto", Email: "letsworkWith.shanto@gmail.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
}); */

/* let primise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log();

    let error = true;
    // let error = false;
    if (!error) {
      resolve({ userName: "Shanto", password: "134" });
    } else {
      reject("ERROR: Somting went worng");
    }
  }, 1000);
});

 
  * -> Chainign :- উপরে রিটার্ন করা ডাটা যখন নিচের নতুন .then() এ আসে তখন সেইটাকে চেইন্নিং বলে।  
  * -> ডাটাবেজ কানেশ্ন এর সময় কাজে লাগবে।  
  
  
  * .then()
  * .catch()
  * Need more learn!



primise4
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userNameIs) => {
    console.log(userNameIs);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));
 */

/* const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ userName: "javascript", password: "134" });
    } else {
      reject("ERROR: Js went worng");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive(); */

/* async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}

getAllUser(); */

/* async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

getAllUser(); */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
