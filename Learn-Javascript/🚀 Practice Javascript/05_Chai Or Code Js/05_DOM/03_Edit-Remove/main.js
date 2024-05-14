/* function addLang(lngName) {
  const addList = document.createElement("li");
  addList.innerHTML = `${lngName}`;
  document.querySelector(".language").appendChild(addList);
}
addLang("python");
addLang("C");
addLang("C++"); 
  * innerHTML ব্যবহার এর ফলে উপর থেকে সব tree traversing হচ্ছে। 
*/

function optiLang(langName) {
  const addList = document.createElement("li");

  /* let addText = document.createTextNode(langName);
  addList.appendChild(addText); */

  // * এখানে সব tree traversing হচ্ছে না। এইটা রিকোমেন্ডেড
  addList.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(addList);
}

optiLang("hello");

// Edit Value

const SecondLang = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
newLi.textContent = "Python";
SecondLang.replaceWith(newLi);

// Edit Value

const firstLang = document.querySelector("li:nth-child(1)");
firstLang.outerHTML = "<li>TypeScript</li>";

// Remove
const removeLang = document.querySelector("li:last-child");
removeLang.remove();
