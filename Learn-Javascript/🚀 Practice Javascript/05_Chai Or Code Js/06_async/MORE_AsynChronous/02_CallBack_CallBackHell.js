const takeOrder = (customer, callBack) => {
  console.log(`Take Order for ${customer}`);
  callBack(customer);
};

const processOrder = (customer, callBack) => {
  console.log(`Processing Order for ${customer}`);

  setTimeout(() => {
    console.log(`Cokking Compeletedr`);
    console.log(`Orfer Processed for ${customer}`);
    callBack(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`Completed Order for ${customer}`);
};

// -> CallBack Hell
takeOrder("Customer 1", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});

console.log("Asyncronus CODE");
