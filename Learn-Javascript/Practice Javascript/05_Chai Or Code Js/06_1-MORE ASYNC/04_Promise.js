/* let promises = new Promise((res, rej) => {
  if (false) {
    return res();
  } else {
    return rej();
  }
});

promises
  .then(function () {
    console.log("Resolve");
  })
  .catch(function () {
    console.log("Reject");
  }); */

/* let checkNum = new Promise((res, rej) => {
  let numIs = Math.floor(Math.random() * 10);

  if (numIs <= 5) {
    console.log(numIs);

    return res();
  } else {
    console.log(numIs);
    return rej();
  }
});

checkNum
  .then(() => {
    console.log("Below 5");
  })
  .catch(() => {
    console.log("Avove 5");
  });
 */

/* let ans = new Promise((res, rej) => {
  return res("Task 1 Complete!");
});

let ans2 = ans.then((data) => {
  console.log(data);
  return new Promise((res, rej) => {
    return res("Task 2 Completee!");
  });
});

let ans3 = ans2.then((data) => {
  console.log(data);
  return new Promise((res, rej) => {
    return res("Task 3 Completeee!");
  });
});

let ans4 = ans3.then((data) => {
  console.log(data);
  return new Promise((res, rej) => {
    return res("Task 4 Completeeee!");
  });
});

ans4.then((data) => {
  console.log(data);
});
 */
/*
 * AJAX এর মধ্যে Promise ব্যবহার হয়।
 */

function abcData() {
  fetch("https://randomuser.me/api/")
    .then(function (rawData) {
      return rawData.json();
    })
    .then(function (realData) {
      console.log(realData);
    });
}

abcData();
