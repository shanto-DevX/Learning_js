/* let owl = (document.getElementById("owl").onclick = function () {
  alert("Owl Clicked");
});

console.log(owl); */

// ------------------------------------------------------------------------

/* let owl = document.getElementById("owl").addEventListener(
  "click",
  () => {
    alert("Clickd Owl");
  },
  false
); */

// attachEvent() -> using in internet explorer
// jQuery - on event

// => Event Object

/* let owl = document.getElementById("owl").addEventListener(
  "click",
  (e) => {
    console.log(e);
    console.log(e.timeStamp);
    console.log(e.defaultPrevented);
    console.log(e.which);
  },
  false
); */

/*
 * type
 * timestamp
 * defaultPrevented :- এলিমেন্ট এর কোন ডিফ্লট কাজকে থামিয়ে দেয়।
 * target
 * toElement
 * srcElement
 * currentTarget
 * clientX, clientY, screenX, screenY
 * altkey, ctrlkey, shiftkey, keycode [https://www.toptal.com/developers/keycode]
 */

//  => Event object |> event propogration

/*
 |> event propagation** :- 
 * https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/
 * https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing

 ২ ধরনের কন্টেক্স হয়
 * event Bubbles *** defult false থাকে  |> bottom to top
    |> নিচে থেকে উপরে যায় । যেমনঃ একটা পেরেন্ট এলিমেন্ট এর চাইল্ড এর মধ্যে কিছু দেওয়া হলো ও পেরেন্ট এলিমেন্ট এ কিছু দেওয়া হলো । এখন যদি চাইল্ড কে ক্লিক করা হয় তাহলে প্রথমে চাইল এর লেখা বা কাজ হবে এর পরে পেরেন্ট এর কাজ হবে একসাথে, নিচের থেকে উপরে যাবে। owl > lu > ul > Image
 * event capture => True |> top to bottom

 * false : Third Perameter false হয়ে থাকে এবং ডিফ্লট এইটা থাকে।
 * true
 */

// 1->  event Bubbles

/* let owl = document.getElementById("owl").addEventListener(
  "click",
  (e) => {
    console.log(e);
    console.log(e.timeStamp);
    console.log(e.defaultPrevented);
    console.log(e.which);
  },
  false
); */

/* document.getElementById("images").addEventListener(
  "click",
  function () {
    console.log("Clicked Inside the ul");
  },
  false
);
document.getElementById("owl").addEventListener(
  "click",
  function () {
    console.log("Clicked owl");
  },
  false
); */

// ======================

/* // |> Event capture

document.getElementById("images").addEventListener(
  "click",
  function () {
    console.log("Clicked Inside the ul");
  },
  true
);
document.getElementById("owl").addEventListener(
  "click",
  function () {
    console.log("Clicked owl");
  },
  true
); */

// ======================
// |> যদি চাই বাবোল হয়ে উপরের পেরেন্ট এর ডাটা দেখাতে না চাইলে।

/* document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("Clicked Inside the ul");
  },
  false
);
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("Clicked owl");
    e.stopPropagation();
  },
  false
); */

// ===========================================================

/* document.getElementById("google").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Google Clicked");
  },
  false
); */

// =============================================================

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.parentNode);
    
    // console.log(e.target.tagName);
    
    if (e.target.tagName === "IMG" ){
        let removeIt = e.target.parentNode;
        removeIt.remove();
        console.log(e.target.id);

    }
      // removeIt.remove();
      // removeIt.parentNode.removeChild(removeIt);
  },
  false
);
