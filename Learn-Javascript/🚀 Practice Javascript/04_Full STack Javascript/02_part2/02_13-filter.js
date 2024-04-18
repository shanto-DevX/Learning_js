/*
 * -> Filter()
 * |> filter() method is a built in array method
 * |> create NewArray & Pass condition
 * |> filter method ব্যবহার করে সহজেই একটা array এর থেকে কন্ডিশন ট্র হলে সেইটা নতুন array নিয়ে রাখে , সেম এলিমেন্ট একের অধিক এলিমেন্ট খুজে বের করে 
 */

/* let PeopleData = [
  { nameIs: "Sahnto", age: 24, Depertemnt: "CMT" },
  { nameIs: "XyZ", age: 25, Depertemnt: "EEE" },
  { nameIs: "yyyy", age: 23, Depertemnt: "CMT" },
  { nameIs: "zzz", age: 26, Depertemnt: "Architecher" },
];

console.log(PeopleData.filter((PeopleDatas) => PeopleDatas.age <= 24)); */

/* const computer = [
  { ram: 4, hdd: 250 },
  { ram: 8, hdd: 512 },
  { ram: 16, hdd: 1000 },
  { ram: 36, hdd: 4000 },
];

console.log(computer.filter((com) => com.ram < 16));
// [ { ram: 4, hdd: 250 }, { ram: 8, hdd: 512 } ] */

/* const X = [1, 2, 5, 41, 5, 4, 5, 94, 9, 7, 8];
console.log(X.filter((y) => y < 20)); */

/* const ageIs = [32, 33, 16, 40];
function CheckAdults(age) {
  return age >= 18;
}

console.log(ageIs.filter(CheckAdults)); */

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

/* function checkLength(word) {
  return word.length > 6;
}
console.log(words.filter(checkLength)); */

console.log(words.filter((word) => word.length > 6));
