/* 
    * forEach --> Check More on inspact Element
    * Higher Order Operation

*/

// const coding = ["js", "python", "Java", "c", "c++"];
/*
// coding.forEach( function name(){})
coding.forEach(function (item) {
  console.log(item);
}); */

// * passOn
// * -> আলাদা ফাংশন তেরি করে সেইটায় forEach এর মধ্যেমে কল করা হয়েছে।
/* function printForEach(item) {
  console.log(item);
}

coding.forEach(printForEach); */

// * -> value, index, array List (access all array)
/* coding.forEach((value, index) => {
  console.log(index, value);
}); */

/* coding.forEach((items, index, arrList) => {
  console.log(items, index, arrList);
}); */

// --------------------------------------

/* const myCdodding = [
  { firstName: "Saiful Islam", lastName: " Shanto" },
  { nowLearning: "Javascript" },
  { location: "Narayanganj" },
];

myCdodding.forEach((x, y) => {
  //   console.log(x, y, z);
  console.log(x, y);
}); */

// --------------------------------------

/*
 * forEach এর মধ্যে রিটার্ন করা যায়না।
 */

/* const coding = ["js", "python", "Java", "c", "c++"];

const value = coding.forEach((item) => {
  console.log(item);

  //-> return item; undefined
});

console.log(value); */
