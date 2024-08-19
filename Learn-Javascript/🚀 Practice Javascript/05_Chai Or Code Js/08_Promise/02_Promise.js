//* => Promise

/* let PromiseIs = new Promise((resolve, reject) => {
  console.log("I'm Promise");
  resolve(123);
});

console.log(PromiseIs);
 */

// |> ----------------------------------------------

/* function getData(DataId, getNexTData) {
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
console.log(result); */

// |> ----------------------------------------------

/* function getData(DataId, getNexTData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data : ${DataId}`);
      reject("Error");
      if (getNexTData) {
        getNexTData();
      }
      console.log(result);
    }, 2000);
  });
}

let result = getData(123);
console.log(result); */

// |> ----------------------------------------------

let get_promise = () => {
  return new Promise((resolve, reject) => {
    console.log("I'm Promise");
    reject("Error");
  });
};

let promiseIs = get_promise();
promiseIs.then((res) => {
  console.log("Promise FULLFILL", res);
});

promiseIs.catch((err) => {
  console.log("Promise Rejected", err);
});

// |> ----------------------------------------------

// * -> Promise Chainnign