/*
 *
 */

// console.log(document);
// console.log(window.document);

// console.dir(window);
// console.dir(window.document);
// console.dir(document);

// console.dir(document.body);
// console.log(document.body);

// console.log(document.head);
// console.dir(document.head);

// --------------------------------------------

// * ==> DOM MENUPULATION <==
// -> selecting with id

let header = document.getElementById("heading");
// console.log(header);
// console.dir(header);

// -> selecting with class

let heading = document.getElementsByClassName("heading");
// console.log(heading);
// console.dir(heading);

// -> HTMLCollection -< return like array

// -> selecting with tags

// let tags = document.getElementsByTagName("p");
// console.log(tags).innerHTML;
// console.dir(tags);

// * querySelector

// -> selecting with querySelector
// Select matching first element

// let elements = document.querySelector("p");
// console.log(elements); //1st element
// console.dir(elements);

// -> selecting with querySelectorAll
// Select all matching element -> Return NODELIST
// Selectting [#id, .class , tag, [attribute]]

// let selectAll = document.querySelectorAll("p");
// console.log(selectAll);
// console.dir(selectAll);

// * Propertes
/*
 * tagname       => return tag for element nodes
 * innerText     => return the text contents of the element & all its children
 * innerHTML     => return the plain text of HTML contents in the element
 * textContent   => return the textual content even for hidden elements
 */

/* let btns = document.querySelector("#btn");
console.log(btns);
console.log(btns.tagName);
console.log(btns.innerText);
console.log(btns.innerHTML);
console.log(btns.textContent); */

// ======================================

// let firstChilds = document.querySelector("div").children; -> 4
// let firstChilds = document.querySelector("div").childNodes;
// console.log(firstChilds);
// console.log(firstChilds.firstChild);
// console.log(firstChilds.lastChild);

// let findChild = document.querySelector("div").children;
// console.log(findChild[0]);
// console.dir(findChild);

/* 
    * 3 type of NODE
    => TextNode
    => CommentNode
    => elementNode

    -> development এর সময় elementNode ব্যবহার হয়। [tag,body,h1-h6,p,others]

    * children
    * firstChild
    * lastChild
    * https://www.digitalocean.com/community/tutorials/understanding-the-dom-tree-and-nodes
*/

// 1:03:43

// let divAccess = document.querySelector("div");
// console.dir(divAccess.innerHTML);
// console.dir(divAccess.innerText);
// console.dir(divAccess.textContent);

// console.dir(divAccess);

// let divAccess = document.querySelector("li");
// console.log(divAccess);
// divAccess.innerHTML = "Shanto";
// console.log(divAccess);

/* let head = document.querySelector("h1");
head.innerText = "New Heading";
head.innerHTML = "<i>New Heading</i>";
console.log((head.style.background = "red")); */

// let head = document.querySelector("h1");
// console.log(head.innerText);
// console.log(head.innerHTML);
// console.log(head.textContent);

/* let head = document.querySelector("h1");
head.append(" Learning From Youtube");
console.log(head); */

/* let boxIs = document.querySelectorAll(".box");
// console.log(boxIs);
let inx = 1;

for (box of boxIs) {
  box.innerText = `new unique value ${inx}`;
  inx++;
} */

// console.log(boxIs);

// console.log((boxIs[0].innerHTML = "Hello 1"));
// console.log((boxIs[1].innerHTML = "Hello 2"));
// console.log((boxIs[2].innerHTML = "Hello 3"));

// ----------------------------------------------------------

// let htmlCollections = document.querySelector(".btn");
/* let htmlCollections = document.getElementsByClassName("btn");
console.log(htmlCollections);

let nodeLists = document.querySelectorAll(".btn");
console.log(nodeLists);
 */

// => Check NODE

let checkNode = document.querySelector("body").childNodes;
console.log(checkNode);
console.log(checkNode[1].nodeType);
console.log(checkNode[3].nodeType);
console.log(checkNode[5].nodeType);
