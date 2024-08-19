/* 
    |> Closures
    * 

    |> Lexical Scoping
    * 
*/

// |> Lexical Scoping

/* function init() {
  let name = "Mozila";
  function displayName() {
    console.log(name);
  }
  displayName();
}

init(); */

//  |> এখানে outer() ফাংশন এর মধ্যে যে ভেরিএবল ডিক্লিয়ার করা হয়েছে userName, এইটার এক্সেস ফাংশন এর মধ্যে থাকা  innerFunc() ইনার ফাংশন এ এক্সেস থাকবে।

//  |> এখানে outer() ফাংশন এর মেমেরি ইনার ফাংশন এ শেয়ার করবে ও এক্সেস থাকবে। এইটা হচ্ছে lexical Scoping

//  |> এখানে outer() ফাংশন এর ডাটা ইনার ফাংশন এ শেয়ার করবে ও এক্সেস থাকবে কিন্তু outer() এর মধ্যে এক ইনার ফাংশন (innerFunc() -> secrate[30] ) এর থেকে অন্য ইনার ফাংশন (inner2Func() -> ❌ secrate[30] ) এ কোন ভেরিএবল এক্সেস করা যাবে না এবং ইনার ফাংশন এর ডাটা (outer() -> ❌ secrate[30]) ফাংশন এও এক্সেস করা যাবে না ।

/* function outer() {
  let userName = "shanto";
  console.log("Secrate Code : ", secrate);

  function innerFunc() {
    let secrate = "my12x8u";
    console.log("inner : ", userName);
  }

  function inner2Func() {
    console.log("Inner 2 : ", userName);
    console.log("Secrate Code : ", secrate);
  }

  innerFunc();
  inner2Func();
}

outer(); */

// console.log("TOO OUTER : ", userName);

// |> ----------------**********************----------------

// |> ----------------**********************----------------
//  *                       Coluser

// -> function lexical Scope Return করে।
// |> ----------------**********************----------------

/* function makeFunc() {
  const name = "mozila";
  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc(); */

/* let btnGreen = document.getElementById("green");
let btnOrange = document.getElementById("orange");


// btnGreen.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

// btnOrange.addEventListener("click", () => {
//   document.body.style.backgroundColor = "orange";
// }); 

function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

// document.getElementById("orange").onclick = clickHandler("orange");
// document.getElementById("green").onclick = clickHandler("green");

btnOrange.onclick = clickHandler("orange");
btnGreen.onclick = clickHandler("green"); */
