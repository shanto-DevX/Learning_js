// async await >> promise chains >> Callback hell
// ----------------------------------------------------

/* 
    # explore Asyncronus js

    |> Async await 

    |> Promise chains

    |> CallBack Hell


    👉 what is sync in js

    * -> synchronous

    |> কোন কোড যখন লাইন বাই লাইন প্রিন্ট হয় তখন সেইটাকে synchronous বলে। প্রথমে ১ লাইনের কাজ শেষ হবে এর পরে ২ লাইনে আসবে এবং কাজ শেষ করে ৩ নাম্বার লাইনে যাবে। 

    * console.log("one");
    * console.log("Two");
    * console.log("Three");

    * -> Asynchronous
        |> কোড যখন লাইন বাই লাইন প্রিন্ট হয় এবং যখন কোন কোড একটা টাইম [API কল করলে] লাগে প্রিন্ট হতে তখন পরের কোড টা চলবে এবং যেইটা কল হতে টাইম লাগবে সেইটা নিচে চলবে। 

            * console.log("one"); 👉 1
            * console.log("Two"); 👉 2
            * console.log("Three"); 👉3 
            * console.log("API"); 👉 5
            * console.log("Four"); 👉 4
        

            * console.log("one"); 👉 1
            * console.log("Two"); 👉 2
            * setTimeout(function () {
            *     console.log("Three"); 👉 4
            *     }, 2000);
                
            * console.log("Four"); 👉 3

👉 -> CallBack

 * একটা ফাংশন এর মধ্যে আরেকটি ফাংশন পেরামিটার হিসেবে ব্যবহার হয় সেইটাকে CallBack বলে
 * CallBack function কে পেরামিটার হিসেবে পাস করতে হলে সুধু নাম দিতে হবে 
     * -> ✅ funcName
     * -> ❌ funcName()

👉 -> CallBack Hell

  * একটি CallBack ফাংশন এর মধ্যে আরেকটি CallBack এড করা বা নেস্টিং করা কে CallBack Hell বলে


👉 -> Promise

  * promise একটা কাজ কমপ্লিট করবে, সেইটা Successful ভাবে হলে resolve state এ যাবে আর successfull না হল্র Reject এ যাবে। 
  * প্রমিসেস জাভাস্ক্রিপ্ট এ একটি অব্জেক্ট
  * Solution to callback hell
  * এইটা API কল এর  সময় কাজে লাগে। 
  * promise Return হয়ে আসে আমাদের কাছে । 


  |> 👉 Async-Await

*/

// =================================================

/*
// -> 1
console.log("one");
console.log("Two");
console.log("Three"); 
*/

// =================================================

/* 
// -> 2
console.log("one");
console.log("Two");

setTimeout(function () {
  console.log("Three");
}, 2000);

console.log("Four"); 

*/

// =================================================

// |> Callback syncronus way

/* function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallBack) {
  sumCallBack(a, b);
}

calculator(1, 2, sum); */

/* function sum(a, b) {
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
}); */

// |> Callback Asyncronus way

/* const hello = () => {
  console.log("Hello Asyncronus");
};

setTimeout(hello, 3000); */

// ========================================

// |> Callback hell

/* function getData(dataID) {
  setTimeout(() => {
    console.log("data", dataID);
  }, 2000);
}

getData(123); */

/* function getData(dataId, getNextData) {
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
}); */

// |> ----------------------------------------------------

// |> Promise.............

/*
 * resolve, reject => Callback Function

 * 3 State In Promise
 * -> pending      =>
 * -> fullfiled    => Resolve
 * -> reject       => Rejected

    -> দারাজ থেকে ওর্ডার করলাম এবং পেমেন্ট করলাম, দারাজ থেকে কোন কিছু (সমস্যা বা অন্যকিছু) জানায়নি তাই এইটা হচ্ছে  pending State

    -> এখন ফাইনালি ওর্ডার করা প্রোডাক্ট ডেলিভারি দিছে এইটা হচ্ছে fullfiled বা Resolve State
    
    -> যদি ওর্ডার কোন কারণে কেন্সেল বা রিফান্ড করে তখন সেইটা  reject State


 */
/* let promiseIs = new Promise((resolve, reject) => {
  console.log("i'm a Promise");
  // resolve(123); //fullfill
  // resolve("Success"); //fullfill

  reject("Some Error"); //rejected
});

console.log(promiseIs); */

/* function getData(dataId, getnextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data : ", dataId);
      resolve("Success");
      if (getnextData) {
        getnextData();
      }
      console.log(result);
    }, 4000);
  });
}
let result = getData(123);
console.log(result); */

/* function getData(dataId, getnextData) {
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
console.log(result); */

/*
 * -> Use Promise
 * .then() & .catch()
 * Promise Fullfill হওয়ার পরে কিছু কাজ থাকে সেইটা জন্য Promise.then()
 * Promise Reject হওয়ার পরে কিছু কাজ থাকে সেইটা জন্য Promise.catch()
 * |> promise.then((res)=>{.....})
 * |> promise.catch((err)=>{.....})
 */

/* let Get_promise = () => {
  return new Promise((resolve, reject) => {
    console.log("I'm a Promise");
    // resolve("Success");
    reject("Error");
  });
};

let promise = Get_promise();
promise.then((res) => {
  console.log("Promise FUllfill", res);
});

promise.catch((err) => {
  console.log("Promise Rejected", err);
});
 */

/*
 * -> Promise CHain
  * .then((res) ={...}).then((res) => {...}) এক then এর পরে আরেকটি then দিয়ে কাজ করাকেই চেইং বলে। 

 */

/* function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some Data 1");
      resolve("Success");
    }, 2000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some Data 2");
      resolve("Success");
    }, 3000);
  });
}

console.log("Fatching Data - 1");
let promise = asyncFunc();
promise.then((res) => {
  console.log(res);
});

console.log("Fatching Data - 2");
let promise2 = asyncFunc2();
promise2.then((res) => {
  console.log(res);
  }); */

/* fetch("https://randomuser.me/api/")
  .then((res) => {
    res.json();
  })
  .then((data) => {
    console.log("Find The Data");
    console.log(data.fetch);
  })
  .catch((err) => {
    console.log("Don't Find Any Data", err);
  }); */

/* function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some Data 1");
      resolve("Success");
    }, 2000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some Data 2");
      resolve("Success");
    }, 3000);
  });
} */

/*  console.log("Fatching Data - 1");
  let promise = asyncFunc();
  promise.then((res) => {
    console.log(res);

    console.log("Fatching Data - 2");
    let promise2 = asyncFunc2();
    promise2.then((res) => {
      console.log(res);
    });

  }); */

// -> Short HANDs
/* console.log("Fatching Data - 1");
asyncFunc().then((res) => {
  console.log("Fatching Data - 2");
  asyncFunc2().then((res) => {});
}); */

/* function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data : ", dataId);
      resolve("Success");
    }, 2000);
  });
} */

// primise CHaing

/* getData(1).then((res) => {
  console.log(res);
  getData(2).then((res) => {
    console.log(res);
    getData(3).then((res) => {
      console.log(res);
    });
  });
}); */

/* getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    // console.log(res);
    return getData(3);
  })
  .then((res) => {
    // console.log(res);
    return getData(4);
  })
  .then((res) => {
    console.log(res);
  }); */

/* 
======================================================================== 
* async-await >> Promise / Promise Chain >> callback Hell
======================================================================== 
// |> 👉 Async-Await

  * Promise এর কোডকে আরো সহজ করে ফেলে
  * Async ফাংশন সবসময় Promise রিটার্ন করে
  * ।|> async function myFunc(){...}
  
  |> Await
  * Await যেখান ব্যবহার হয়, সেখানকার কোন ফাংশন থেকে Promise আসলে সেইটা যতখন পর্যন্ত Panding State এ থাকবে ততক্ষন Await বাকি সব ফাংশন এর কাজ থামিয়ে রাখবে। 
  * Async ফাংশন এর মধ্যে await ব্যবহার হয়ে থাকে। 
  * 200 for succesful API Call

*/

/* async function hello() {
  console.log("Hello Async");
}

hello(); */

/* function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api(); //1st Call
  await api(); //2nd Call
}

getWeatherData(); */

function getdata(getDataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data ${getDataId}`);
      resolve("Success");
    }, 1000);
  });
}

// Async-await

/* async function getALLData() {
  await getdata(1);
  await getdata(12);
  await getdata(123);
  await getdata(1234);
  await getdata(12345);
}

getALLData(); */

// -> Using IIFF
/* (async function getALLData() {
  await getdata(1);
  await getdata(12);
  await getdata(123);
  await getdata(1234);
  await getdata(12345);
})(); */

(async () => {
  await getdata(1);
  await getdata(12);
  await getdata(123);
  await getdata(1234);
  await getdata(12345);
})();
