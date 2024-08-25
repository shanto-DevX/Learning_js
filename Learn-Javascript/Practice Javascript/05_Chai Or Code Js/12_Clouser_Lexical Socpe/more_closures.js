/* 
    |> Closires
    * কোন ফাংশন এর মধ্যে আরেকটি ফাংশন যখন ডিক্লিয়ার করা হয়, মেইন ফাংশন এর ডাটা যদি ভিত্রের ইনার ফাংশন এক্সেস করে থাকে ও মেইন ফাংশন এর ভিতরে ইনার ফাংশন কল করা হয় সেইটাকে Closires বলে। 

    * 

*/

/* function main() {
  let name = "Shanto";
  function sayMyName() {
    console.log(name);
  }
  sayMyName();
}

main(); */

/* function main() {
  let name = "Shanto";
  function sayMyName() {
    console.log(name);
  }
  return sayMyName;
}

let ln = main();
ln(); */

/* function main(name) {
  function sayMyName() {
    console.log(name);
  }
  return sayMyName;
}

let nameIS = main("SHanto");
nameIS(); */

/* function adder(num1) {
  function add(num2) {
    console.log(num1 + num2);
  }

  return add;
}

let addTo5 = adder(10);
addTo5(5); */

/* const myName = document.getElementById("myName");
const btn = document.getElementById("my_btn");

function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}px`;
  }

  return changeSize;
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size52 = makeTextSizer(52);
const size80 = makeTextSizer(80);

btn.addEventListener("click", size80); */

function counter() {
  let count = 0;
  return {
    increace: function () {
      count++;
    },
    decreace: function () {
      count--;
    },
    getNumber: function () {
      return count;
    },
  };
}

let x = counter();
x.increace();
x.increace();
x.increace();
console.log(x.getNumber());
