/* 
    |> Fetch API
    *--------------------------------
    * request -> API <- Response
    * API => Application Programming interface
    
    * যখন কোন ডাটার জন্য request Sending এবং Receiving করা হয় সেইটাকে Fetch বলে থাকে। 
    * request এবং Response ব্যবহার করে। 
    * fetch() <== Fetch Methods
    * const url = fetch(url,[options])
    * fetch promise Return করে। 
     
    * Status:200 is Request Is OK>

    |> -> Diffrent Type of Request
    * -> Get Request [URL]
      *  => যে Request ডেটা নিয়ে আসে বা রিটার্ন হয়ে আসে সেইটা হচ্ছে Get Request। 
    * -> Set Request
    * -> delete Request
    * -> put Request
     
    |> Unsetarding Terms
    * AJAX is asynchronouse JS & XML
    * JSON is Javascript Object Notation
    * -< Data Formate
          * ==< XML 
          * ==< JSON 
          * ==< AJAJ ->  asynchronouse JS & JSON

    |> How API WOrks in js
        *1) Response [json]
        *2) JS Object

    |> Requests & Response => 26:05
        * HTTP Verbs
          * ->  https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
          * -> *Get Request <== For Get Some Data
          * -> Post Request ==> For Send Some Data
          * -> Delete Request ==> For Delete Data
          * -> Patch Request ==> For change or Update Data
          
        * Response Status Code
        * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        
        * HTTP Request এর মধ্যে Header থাকে যেখানে সব ইনফোরমেশন থাকে।  
        
*/

/* const url = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const factBtn = document.querySelector("#btn"); */

/* const getFeats = (async () => {
  console.log("Getting Data..........");
  let response = await fetch(url);
  // console.log(response);
  // console.log(response.status);
  let data = await response.json();
  // console.log(data[0]);
  // console.log(data[0].text);
  // console.log(data[0].type);

  // factPara.innerHTML = data[0].text;
  factBtn.addEventListener("click", () => {
    factPara.innerText = data[0].text;
  });
})(); */

/* fullBtn.addEventListener("click", () => {
  fullData.innerText = data;
}); */

// fullBtn.addEventListener("click", getFeats);

/* function getFacts() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      factPara.innerText = data[0].text;
    });
}

factBtn.addEventListener("click", getFacts); */

// ----------------------------------------------------------

let urlIs = "https://randomuser.me/api/";
const factPara = document.querySelector("#fact");
const factBtn = document.querySelector("#btn");

let getApis = async () => {
  let response = await fetch(urlIs);
  let data = await response.json();
  console.log(data);
  factBtn.addEventListener("click", () => {
    factPara.innerHTML = `Name : ${data.results[0].name.first} ${data.results[0].name.last} <br> location : ${data.results[0].location.city} <br> Email : ${data.results[0].email}`;
  });
};

// getApis();

factBtn.addEventListener("click", getApis);
