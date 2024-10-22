let textValue = document.getElementById("name");
let ButtonValue = document.getElementById("btn");

let userNameIS = document.getElementById("userName");

ButtonValue.addEventListener("click", () => {
  const value = textValue.value;
  localStorage.setItem("name", value);
  //   const setValue = localStorage.getItem("name");
  //   userNameIS.innerText = setValue;

  location.reload();
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  userNameIS.innerText = value;
});
