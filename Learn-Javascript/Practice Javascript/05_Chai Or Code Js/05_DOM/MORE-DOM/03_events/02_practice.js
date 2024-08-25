/* let btnDark = document.querySelector("#btn-dark");
let btnlight = document.querySelector("#btn-light");

btnDark.addEventListener("click", () => {
  //   btnDark.style.body.backgroundColor = "red";
  document.body.style.backgroundColor = "#282828";
});

btnlight.addEventListener("click", () => {
  //   btnDark.style.body.backgroundColor = "red";
  document.body.style.backgroundColor = "#fff";
}); */

/* let dark = (document.body.style.backgroundColor = "#282828");
let light = (document.body.style.backgroundColor = "#fff"); */

/* lightAndLight.addEventListener("mouseenter", function () {
  let dark = "#282828";
  
  if (dark === "#282828") {
    document.body.style.backgroundColor = "#282828";
  } else {
    document.body.style.backgroundColor = "#ffff";
  }
}); */

// lightAndLight.addEventListener("click", dark);
// lightAndLight.addEventListener("click", light);

/* lightAndLight.addEventListener("click", function () {
  const curColor = document.body.style.backgroundColor;
  
  document.body.style.backgroundColor =
  curColor === "#282828" ? "#fff" : "#282828";
}); */

/* let lightAndLight = document.querySelector("#btn-lightAndDark");
let currMode = "light";
let bodyIs = document.querySelector("body");

lightAndLight.addEventListener("mouseover", () => {
  // console.log("your are trying change");

  if (currMode === "light") {
    currMode = "dark";
    // document.querySelector("body").style.backgroundColor = "#282828";
    bodyIs.classList.add("dark");
    bodyIs.classList.remove("light");
  } else {
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "#fff";
    bodyIs.classList.add("light");
    bodyIs.classList.remove("dark");
  }

  console.log(currMode);
}); */

// -----------------------------------------------------------

/*
 * select button and when i click on light on(yellow) and button inner text show on when click off light off [white]
 */

let selectLight = document.querySelector("#light");
let btnON = document.querySelector("#btn-on");
let btnOFF = document.querySelector("#btn-off");

/* btnON.addEventListener("click", () => {
  selectLight.style.backgroundColor = "yellow";
});

btnOFF.addEventListener("click", () => {
  selectLight.style.backgroundColor = "#fff";
}); */

let btnAuto = document.querySelector("#btn-Onoff");
var currColor = "yellow";

btnAuto.addEventListener("click", function () {
  if (currColor === "yellow") {
    selectLight.style.backgroundColor = "yellow";
    currColor = "#fff";
  } else {
    selectLight.style.backgroundColor = "#fff";
    currColor = "yellow";
  }
});
