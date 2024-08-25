// -> Callback

/* function sum(a, b) {
  console.log(a + b);
}

function mul(a, b) {
  console.log(a * b);
}

function calculate(a, b, sumCallback) {
  sumCallback(a, b);
}

calculate(3, 2, (a, b) => {
  console.log(a ** b);
});

calculate(3, 4, mul); */

// * -------------------------------------------

function getData(getDataId, getNextData) {
  setTimeout(() => {
    console.log("Data : ", getDataId);
    if (getNextData) {
      getNextData();
    }
  }, 1000);
}

getData(1, () => {
  getData(12, () => {
    getData(123, () => {
      getData(1234, () => {
        console.log("Program DOne");
      });
    });
  });
});
