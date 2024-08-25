/* // Craete element

let divX = document.createElement("div");

// divX.className = "main";
// divX.id = "myId";
// divX.id = parseInt(Math.random() * 10);
// divX.id = Math.round(Math.random() * 10 + 1);

divX.setAttribute("title", "Generated Title");
divX.style.backgroundColor = "Green";
divX.style.padding = "12px";

// divX.innerHTML = "Learning DOM";

let addText = document.createTextNode("Learning DOM");
divX.appendChild(addText);

console.log(divX);
// console.log((divX.innerHTML = "Shanto"));

document.body.appendChild(divX); */

//* ====================================================

// -> Craete element

const newHeader = document.createElement("h1");
console.log(newHeader);

newHeader.id = "Heads";
newHeader.className = "Headds";

let addText = document.createTextNode("Hello World");
newHeader.appendChild(addText);

newHeader.style.backgroundColor = "green";
newHeader.style.padding = "50px";
newHeader.style.borderRadius = "100px";
newHeader.style.marginTop = "100px";

document.body.appendChild(newHeader);
document.body.appendChild(newHeader);
document.body.appendChild(newHeader);
document.body.appendChild(newHeader);

/* for (let i = 0; i < 5; i++) {
  console.log(document.body.appendChild(newHeader));
} */
// -----------------
const targetID = document.getElementById("Heads");
targetID.style.color = "white";
targetID.style.fontSize = "40px";
targetID.style.textAlign = "center";

// -----------------

console.log(newHeader.childNodes);
