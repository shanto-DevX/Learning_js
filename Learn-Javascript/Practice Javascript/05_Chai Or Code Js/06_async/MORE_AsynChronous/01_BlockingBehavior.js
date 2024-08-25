const processOrder = (coustomer) => {
  console.log("Process Order for customer 1");

  let currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());

  console.log(`Order Process For customer 1`);
};

console.log("Take Order For customer 1");
processOrder();
console.log(`Completed Order for customer 1`);
