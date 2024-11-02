# Promise in javascript

---

## Promise কি??

> - Promise হচ্ছে, যেই টাস্ক দেওয়া হচ্ছে সেইটাস্ক "Queue" থাকবে কিন্তু Queue তে থেকে কম্লিট হবে না।
> - Modren program এর মধ্যে প্রমিসেস লাগানো হয়ে থাকে।

> Promise এর মধ্যে ৩ ধরেনের State হয় <br>

    1.pending
    2.fulfilled /-> Resolved
    3.Rejected

---

> Code Samples

### Craete Promise

```javascript
const promiseOne = new Promise();
```

#### promise Creation

```javascript
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
});
```

#### create promise without variable

```javascript
new Promise(function (resolve, Reject) {
  setTimeout(function () {
    console.log("Task Complete Async");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise Consume Done");
});
```

#### Create Promise / Consume Data / Data Passwing with object

```javascript
let promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Complete");
    resolve({ userName: "Shanto", Email: "letsworkWith.shanto@gmail.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});
```

#### then / catch / finally

```javascript
let primise4 = new Promise(function (resolve, reject) {
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
```

#### try / catch

```javascript
const promiseFive = new Promise(function (resolve, reject) {
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

consumePromiseFive();
```

#### get data from api useing await / fetch

```javascript
async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

getAllUser();
```

#### get data from api useing fetch / then / catch

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
```

---

### Promise Library

!(BlueBird)[bluebardjs.com]
!(Q)[Q]

### Some notes

- js এর মধ্যে class নাম এর কন্সেপ্ট কম হয়েথাকে।
- সব কিছুকে ওব্জেক্ট বা প্রোটোটাইপ হিসেবে দেখে

---

## NEW LACTURE

### what is sync in js

##### Synchronous

> কোন কোড যখন লাইন বাই লাইন প্রিন্ট হয় তখন সেইটাকে synchronous বলে। প্রথমে ১ লাইনের কাজ শেষ হবে এর পরে ২ লাইনে আসবে এবং কাজ শেষ করে ৩ নাম্বার লাইনে যাবে।

```javascript
console.log("one");
console.log("Two");
console.log("Three");
```

##### Asynchronous

> কোড যখন লাইন বাই লাইন প্রিন্ট হয় এবং যখন কোন কোড একটা টাইম [API কল করলে] লাগে প্রিন্ট হতে তখন পরের কোড টা চলবে এবং যেইটা কল হতে টাইম লাগবে সেইটা নিচে পেরালাল ভাবে চলবে।

```javascript

  console.log("one"); 👉 1
  console.log("Two"); 👉 2
  console.log("Three"); 👉3
  console.log("API"); 👉 5
  console.log("Four"); 👉 4


  console.log("one");
  console.log("Two");
  setTimeout(function () {
      console.log("Three");
      }, 2000);

  console.log("Four");

```

### CallBack & Callback Hell

#### Callback

> - একটা ফাংশন এর মধ্যে আরেকটি ফাংশন পেরামিটার হিসেবে ব্যবহার হয় সেইটাকে CallBack বলে
> - CallBack function কে পেরামিটার হিসেবে পাস করতে হলে সুধু নাম দিতে হবে
>   > > - ✅ funcName
>   > > - ❌ funcName()

```javascript
// Callback syncronyse way

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallBack) {
  sumCallBack(a, b);
}

calculator(1, 2, sum);

// --------------------------------

function sum(a, b) {
  console.log(a + b);
}

function multiply(a, b) {
  console.log(a * b);
}

function calculator(a, b, callBackCalculator) {
  callBackCalculator(a, b);
}

calculator(5, 2, sum);
calculator(5, 2, multiply);
calculator(5, 2, (a, b) => {
  console.log(a ** b);
});
```

```javascript
//  Callback Asyncronyse way

const hello = () => {
  console.log("Hello Asyncronus");
};

setTimeout(hello, 3000);
```

#### Callback Hell

> - একটি CallBack ফাংশন এর মধ্যে আরেকটি CallBack এড করা বা নেস্টিং করা কে CallBack Hell বলে
> - এইটা পিরামিড আকারে হয়ে থাকে . pyramin of DOOM
>   > - এই Callback Hell সমস্যা সমাধান করতে Promise ব্যবহার হয়।

```javascript
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("Data : ", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

// getData(1, getData(2)); invalid

// * Callback Hell |> Nested callback
getData(1, () => {
  console.log("Getting Data 2 .........");
  getData(2, () => {
    console.log("Getting Data 3 .........");
    getData(3, () => {
      console.log("Getting Data 4 .........");
      getData(4, () => {
        console.log("Program Done");
      });
    });
  });
});
```

---

#### Promise

> resolve, reject => Callback Function

> 3 State In Promise
>
> - -> pending =>
> - -> fullfiled => Resolve
> - -> reject => Rejected

> - দারাজ থেকে ওর্ডার করলাম এবং পেমেন্ট করলাম, দারাজ থেকে কোন কিছু (সমস্যা বা অন্যকিছু) জানায়নি তাই এইটা হচ্ছে pending State
> - এখন ফাইনালি ওর্ডার করা প্রোডাক্ট ডেলিভারি দিছে এইটা হচ্ছে fullfiled বা Resolve State
> - যদি ওর্ডার কোন কারণে কেন্সেল বা রিফান্ড করে তখন সেইটা reject State

```javascript

=> Code 1


let PromiseIs = new Promise((resolve, reject) => {
  console.log("I'm Promise");
  resolve(123);
});

console.log(PromiseIs);


=> Code 2
function getData(DataId, getNexTData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data : ${DataId}`);
      resolve("Success");
      if (getNexTData) {
        getNexTData();
      }
      console.log(result);
    }, 2000);
  });
}

let result = getData(123);
console.log(result);


=> Code 3

function getData(dataId, getnextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error");
      if (getnextData) {
        getnextData();
      }
      console.log(result);
    }, 4000);
  });
}
let result = getData(123);
console.log(result);

```

```

```
