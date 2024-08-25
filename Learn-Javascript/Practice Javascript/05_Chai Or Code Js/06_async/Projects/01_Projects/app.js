/* setTimeout(function () {
  console.log("SHanto");
}, 2000); */

/* const sayHi = function () {
  console.log("HEllo world");
};

setTimeout(sayHi, 2000); */

/* let change = document.querySelector("h1");

const changeMe = setTimeout(function () {
  change.innerHTML = "Best Javascript Course";
  console.log("Change DOne");
}, 2000);

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(changeMe);
  console.log("Stopped");
}); */

// ==================================
// setInterval()

/* setInterval(function () {
  console.log("Hello World");
  console.log(Date.now());
}, 2000); */

/* const sayDate = function () {
  console.log("Hello World");
  console.log(Date.now());
}; */

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
