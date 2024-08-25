/* const requestURL = "https://api.github.com/users/shanto-DevX";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL); //->এখান কল হবে না
// console.log("HERE");
// console.log(xhr.readyState); //-> for check State 1
xhr.onreadystatechange = function () {
  // -> Request CHeck
  console.log(xhr.readyState);

  if (xhr.readyState === 4) {
    // এখানে String Data কে JSON এ কনভার্ট করে সেইটাকে parse করে অব্জেট এ আনতে হবে।
    let data = JSON.parse(this.responseText);
    console.log(typeof data);
    console.log(data.followers);
  }
};
xhr.send(); //->এখান কল হবে */

let nameIs = document.getElementById("name");
let idIS = document.getElementById("idIs");
let LocationIS = document.getElementById("location");
let imagesIS = document.getElementById("imges");

const apiUrl = "https://api.github.com/users/shanto-DevX";
const xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let dataFormAPI = JSON.parse(this.responseText);
    nameIs.innerHTML = "Name : " + dataFormAPI.name;
    idIS.innerHTML = "ID : " + dataFormAPI.id;
    LocationIS.innerHTML = "Location : " + dataFormAPI.location;
    imagesIS.src = dataFormAPI.avatar_url;
  }
};

xhr.send();
