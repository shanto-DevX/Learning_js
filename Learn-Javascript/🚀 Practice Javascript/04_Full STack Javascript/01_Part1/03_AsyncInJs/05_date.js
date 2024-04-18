// -> year, month, day, hours, min, sec, miliseconds

// const newDate = new Date();
// const newDate = new Date(2024, 2, 24, 12, 30, 0, 0);

const date = new Date();
// date.setDate(date.getDate() + 1);
// date.setDate(date.getDate() - 1);
const fullYear = date.getFullYear();
console.log(date);
console.log(fullYear);

/* console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString()); */

/* const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
const milisec = date.getMilliseconds();

console.log(`year ${year}`);
console.log(`month ${month}`);
console.log(`Day ${day}`);
console.log(`hours ${hours}`);
console.log(`Minutes ${min}`);
console.log(`Seconds ${sec}`);
console.log(`Milliseconds ${milisec}`); */
