/* const meeting = true;

const promise_meeting = new Promise((resolve, reject) => {
  if (!meeting) {
    const mettingCreate = {
      name: "Hello",
      date: "8-8-2024",
      time: "9:00",
    };
    resolve(mettingCreate);
  } else {
    reject(new Error(`Metting Already Scheduled`));
  }
});

promise_meeting
  .then((res) => {
    {
      console.log(JSON.stringify(res));
    }
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log("Hello"); */

//  Promise Chaing

const meeting = false;

const promise_meeting = new Promise((resolve, reject) => {
  if (!meeting) {
    const mettingCreate = {
      name: "Hello",
      date: "8-8-2024",
      time: "9:00",
    };
    resolve(mettingCreate);
  } else {
    reject(new Error(`Metting Already Scheduled`));
  }
});

/* const addToCalender = (mettingCreate) => {
  return new Promise((resolve, reject) => {
    const calender = `${mettingCreate.name} has bean schduled on ${mettingCreate.date} at ${mettingCreate.time}`;

    resolve(calender);
  });
}; */

/* const addToCalender = (mettingCreate) => {
  const calender = `${mettingCreate.name} has bean schduled on ${mettingCreate.date} at ${mettingCreate.time}`;

  return Promise.resolve(calender);
};

promise_meeting
  .then(addToCalender)
  .then((res) => {
    {
      // console.log(JSON.stringify(res));
      console.log(res);
    }
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log("Hello"); */

// -----------------

let promise1 = Promise.resolve(`Promise 1 Resolved`);

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 Resolve`);
  }, 2000);
});

/* promise1.then((res) => {
  console.log(res);
});

promise2.then((res) => {
  console.log(res);
}); */

//* এখন চাচ্ছি দুইটা প্রমিস একসাথে রান করবে . all Array return করবে।

/* Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
}); */

//* এখন চাচ্ছি দুইটা প্রমিস একসাথে রান করবে .race  যেইটা আগে Resolve হবে সেইটা প্রিন্ট করে।

Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
