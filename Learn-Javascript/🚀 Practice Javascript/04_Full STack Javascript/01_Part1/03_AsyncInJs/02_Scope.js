/* 
Scope IN JS
—-------------------------------------------
দুই ধরেনের scope আছে।
Global Scope
Local Scope

|> #GLobal Scope
* Global Scope Variable ব্লক এর বাহিরে ডিক্লিয়ার করা হয়
* সবযায়গা থেকে এক্সেস করা যায়
|> #Local Scope
* Local Scope Variable ব্লক এর মধ্যে ডিক্লিয়ার করা হয়
* ব্লক এর মধ্যে এক্সেস করা যায়। 

https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript
*/

/* let textMessage = "hi"; //-> Global Variable
console.log(textMessage);

function showMessage() {
  let textMessage = "Hello"; //-> Local Variable
  console.log(textMessage);
}

showMessage(); */

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
