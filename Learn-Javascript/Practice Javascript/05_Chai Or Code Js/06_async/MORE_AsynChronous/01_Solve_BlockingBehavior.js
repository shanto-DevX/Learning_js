const processOrder = (coustomer) => {
  console.log("Process Order for customer 1");

  setTimeout(() => {
    console.log(`Cooking Colpeleted`);
  }, 3000);

  console.log(`Order Process For customer 1`);
};

console.log("Take Order For customer 1");
processOrder();
console.log(`Completed Order for customer 1`);

