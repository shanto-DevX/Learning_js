/* const height = window.innerHeight;
const width = window.innerWidth;

setInterval(function () {
  alert(height, width);
}, 1000); */

/* let btn = document.querySelector("#btn1");
btn.onclick = () => {
  console.log("btn was click");
  let a = 25;
  a++;
  console.log(a);
}; */

/* let box = document.querySelector("#box2");
box.onmouseover = () => {
  console.log("Your are inside div");
}; */

//* => Event Object

/* let btn = document.querySelector("#btn1");
btn.onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
}; */

/* let box = document.querySelector("#box2");
box.onmouseover = (eve) => {
  console.log(eve);
  console.log(eve.type);
  console.log(eve.target);
  console.log(eve.clientX, eve.clientY);
  console.log(eve.composed);
}; */

//* => Event listeners
let btn = document.querySelector("#btn1");

/* btn.addEventListener("click", (eventObj) => {
  console.log("Button was clicked 1");
  console.log(eventObj);
  console.log(eventObj.type);
  console.log(eventObj.target);
}); */

btn.addEventListener("click", () => {
  console.log("Button was clicked 1");
});

btn.addEventListener("click", () => {
  console.log("Button was clicked 2");
});

const h3 = () => {
  console.log("Button was clicked 3");
};
btn.addEventListener("click", h3);

btn.addEventListener("click", () => {
  console.log("Button was clicked 4");
});

btn.removeEventListener("click", h3);
