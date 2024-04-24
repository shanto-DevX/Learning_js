// Date

// let dateIs = new Date();
// console.log(dateIs.getTime());
// console.log(dateIs.getDate());
// console.log(dateIs.getDay());
// console.log(dateIs.getMonth());
// console.log(dateIs.getFullYear());

// console.log(dateIs.toString());
// console.log(dateIs.toDateString());
// console.log(dateIs.toISOString());
// console.log(dateIs.toJSON());
// console.log(dateIs.toLocaleDateString());
// console.log(dateIs.toLocaleString());
// console.log(dateIs.toLocaleTimeString());
// console.log(dateIs.toTimeString());
// console.log(dateIs.toUTCString());

// let myCreatedDate = new Date(2024, 0 + 2, 21);
// console.log(myCreatedDate.toDateString());

// let myCreatedDateAndTime = new Date(2024, 0, 21, 9, 35);
// console.log(myCreatedDateAndTime.toLocaleString());
// console.log(myCreatedDateAndTime.toLocaleDateString());
// console.log(myCreatedDateAndTime.toLocaleTimeString());

// let myCreatedDAndT = new Date("2023-01-14");

// let myCreatedDAndT = new Date("01-14-2024");
// console.log(myCreatedDAndT.toLocaleString());

// let myCreatedDAndT = new Date("2023-01-14");
// let myTimeSteamp = Date.now();
// console.log(myTimeSteamp);
// console.log(myCreatedDAndT.getTime());

// let myTimeInSec = Date.now();
// console.log(myTimeInSec);
// console.log(myTimeInSec / 1000);
// console.log(Math.floor(myTimeInSec / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getTime());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getTime()}`

console.log(
  newDate.toLocaleString("default", {
    day: "2-digit",
    weekday: "long",
    month: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour: "2-digit",
  })
);
