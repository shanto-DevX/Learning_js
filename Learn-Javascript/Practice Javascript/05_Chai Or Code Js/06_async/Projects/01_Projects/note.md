# Javascript async Project

---

- **setTimeout()**
  > কোন এলিমেন্ট কে একটা নির্দিষ্ট সময় পরে দেখাতে `setTimeout()` ব্যবহার করা হয়।

```javascript
let change = document.querySelector("h1");

setTimeout(function () {
  change.innerHTML = "Best Javascript Course";
}, 2000);
```

---

- **clearTimeout()**
  > কোন এলিমেন্ট `setTimeout()` দিয়ে যদি চাই যে সেট করা টাইমের মধ্যে যেই কাজ টা হত সেইটা বন্ধ করতে তাহলে `clearTimeout()` ব্যবহার করা হয় । রেফারেন্স এর মধ্যেমে এলিমেন্ট এর কাজ বন্ধ করে দেয়।

```html
<button id="stop">Stop</button>
```

```javascript
let change = document.querySelector("h1");

const changeMe = setTimeout(function () {
  change.innerHTML = "Best Javascript Course";
  console.log("Change DOne");
}, 2000);

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(changeMe);
  console.log("Stopped");
});
```

---

- **setInterval()**
  > একটা এলিমেন্ট একটা নির্দিষ্ট সময় পরে নিজে নিজে রান করতে থাকে ।

```javascript

1----
 setInterval(function () {
  console.log("Hello World");
  console.log(Date.now());
}, 2000);

2----
const sayDate = function () {
  console.log("Hello World");
  console.log(Date.now());
};

setInterval(sayDate, 2000);

//Third Peramerter
const sayDate = function (str) {
  console.log(str);
  console.log(Date.now());
};

setInterval(sayDate, 2000, "Shanto");

```

---

#### A Little Project
    বাটন এ ক্লিক করলে কোড রান setInterval() করবে এবং ক্লিক করলে কোড clearInterval() স্টপ হবে।

```html
<h1>Let Work With Shanto</h1>
<button id="start">Start</button>
<button id="stop">Stop</button>
```

```javascript
const sayDate = function (str) {
  console.log(str);
  console.log(Date.now());
};

let intervalId;

document.querySelector("#start").addEventListener("click", function () {
  intervalId = setInterval(sayDate, 1000, "Shanto");
  console.log("Started");
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(intervalId);
  console.log("Stop");
});
```

---

- clearInterval()
- clearTimeout()
