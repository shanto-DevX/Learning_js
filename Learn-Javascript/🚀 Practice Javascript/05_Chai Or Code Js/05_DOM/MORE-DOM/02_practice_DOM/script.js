/* // let selectId = document.getElementById("buttons");
let selectId = document.getAttribute("buttons");
console.log(selectId);
console.log(selectId.childNodes);
console.log(selectId.tagName);
console.log(selectId.childNodes);
console.log(selectId.innerHTML);
console.log(selectId.innerText);
console.log(selectId.textContent);

selectId.style.color = "#fff";
selectId.style.background = "green";
selectId.style.fontSize = "24px";
selectId.style.padding = "24px";
selectId.style.display = "inline-block";
selectId.style.textDecoration = "none";
selectId.style.borderRadius = "10px";

console.log(selectId); */

// const selectID = document.getElementById("buttons");
// console.log(selectID);
// console.dir(selectID);

// let getIDs = selectID.getAttribute("class");
// console.log(getIDs);

// * => Set Class
/* const selectClass = document.querySelector("a");

selectClass.setAttribute("class", "hello hello2");

console.log(selectClass); */

// => LIST
// let selectList = document.querySelector("ul");

// console.log(selectList.children);
// console.log(selectList.firstChild);
// console.log(selectList.lastChild);
// console.log(selectList.childNodes);

/* let selectList = document.querySelectorAll("li");
selectList[0].style.color = "red";
selectList[1].style.color = "Green";
selectList[2].style.color = "blue";
selectList[3].style.color = "gray";
selectList[4].style.color = "teal";


console.log(selectList);
console.dir(selectList);
 */

let createDiv = document.createElement("p");
let addText = document.createTextNode("Learn DOM");
createDiv.appendChild(addText);
let element = document.getElementsByClassName("main");
element.appendChild(createDiv);

// createDiv.className("newClass");
// createDiv.id("NewID");

// createDiv.setAttribute("title", "new Class & Id");
