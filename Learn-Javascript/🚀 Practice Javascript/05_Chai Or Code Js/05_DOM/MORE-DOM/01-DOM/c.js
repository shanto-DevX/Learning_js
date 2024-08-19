/* 
    * attribute selector
    -> getAttribute(att)
    -> setAttribute(att,value)

    * style
    -> node.style |> variable.style.cssElement = "value";

    * insert Element
    |> let el = document.createElement("div")
    -> node.append(el) |> adds at the end of node (inside)
    -> node.prepedn(el) |> adds at the start of node (inside)
    -> node.before(el) |> adds before the node (outside)
    -> node.after(el) |> adds after the node (outside)

    * delete element
    -> node.remove() //removes the node

*/

//* => getAttribute & setAttribute

/* let addDiv = document.querySelector("div");
console.log(addDiv);

let x = addDiv.getAttribute("id");
console.log(x);

let NameIs = addDiv.getAttribute("name");
console.log(NameIs);

let FindPera = document.querySelector("p");
let xx = FindPera.getAttribute("class");
console.log(xx); */

// let changeClass = document.querySelector("p");
// console.log(changeClass.setAttribute("class", "hello")); //change class Name

// ================================================================

// *  -> change style Value

/* 
    Css                     =>      Javascript style
    * color                 ->      color
    * background-color      ->      backgroundColor
    * font-size             ->      fontSize
*/

/* let boxIs = document.querySelector("#box");
console.log(boxIs.style); //show inline style value after console log

boxIs.style.backgroundColor = "Red";
boxIs.style.fontSize = "34px";
boxIs.style.visibility = "hidden";
boxIs.innerHTML = "hellos"; */

// ================================================================

//* insert Element |> create & add

// let newBTN = document.createElement("button");
// newBTN.innerHTML = "Click Me";

// let addHeading = document.createElement("h1");
// addHeading.innerHTML = "Hello Heading";
// addHeading.style.color = "red";

// document.querySelector("body").prepend(addHeading);

// let div = document.querySelector("div");
// div.append(newBTN); |> div এর ভিতরে পরে বসে
// div.prepend(newBTN); |> div এর ভিতরে আগে বসে
// div.after(newBTN); |> div এর বাহিরে পরে  বসে
// div.before(newBTN); //|> div এর বাহিরে আগে বসে

// ================================================================

//* Delete Element |>

/* let pera = document.querySelector("p");
pera.remove(); */

/* 
    * appendChild
    * removeChild
    * Learn more from MDN

*/

// ==============================================
// |> Problem Solving

/* let btns = document.createElement("button");

btns.innerHTML = "click Me";
btns.style.backgroundColor = "red";
btns.style.color = "white";
btns.style.padding = "20px 40px";
btns.style.marginBottom = "40px";

document.querySelector("body").prepend(btns); */

// -> Add Class in elements
let selP = document.querySelector("p");
// selP.style.background = "red";
// let pClass = selP.getAttribute(".newClass");
// let pSetClass = selP.setAttribute("class", "newClass");
// let pSetClass = selP.classList.add("newClass");
let pSetClass = selP.classList.remove("newClass");
console.log(pClass);

//  |> Learn about class list
