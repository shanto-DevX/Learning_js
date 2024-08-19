# In This Project i Do Random Data Generate using https://randomuser.me/api/

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Card Design</title>
    <style>
      .container {
        width: 1170px;
        margin: 100px auto;
      }
      .card {
        width: 330px;
        border: 2px solid rgb(201, 201, 201);
        padding: 20px;
        border-radius: 10px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
      .card img {
        width: 100%;
      }
      .card h2 {
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <img src="" alt="images" id="images" />
        <h2 id="name"></h2>
        <h2 id="email"></h2>
        <h2 id="phone"></h2>
        <h2 id="country"></h2>
      </div>
    </div>
    <script src="./02_api.js"></script>
  </body>
</html>
```

        এখানে Html & Css দিয়ে কার্ড এর স্ট্রাকচার তেরি করা হয়েছে!

---

```javascript
// SELECT ITEMS

const nameIs = document.getElementById("name");
const emailIs = document.getElementById("email");
const phoneIs = document.getElementById("phone");
const countryIs = document.getElementById("country");
const imageIs = document.getElementById("images");

// Call API
const callAPI = "https://randomuser.me/api/";
const apiReqst = new XMLHttpRequest();

apiReqst.open("GET", callAPI);
apiReqst.onreadystatechange = function () {
  if (apiReqst.readyState === 4) {
    const apiData = JSON.parse(this.responseText);
    const user = apiData.results[0];
    nameIs.innerHTML = `Name : ${user.name.first} ${user.name.last}`;
    emailIs.innerHTML = `Email : ${user.email}`;
    phoneIs.innerHTML = `Phone : ${user.phone}`;
    countryIs.innerHTML = `country : ${user.location.country}`;
    imageIs.src = user.picture.large;
  }
};

apiReqst.send();
```

        - এখানে প্রথমে SELECT ITEMS দিয়ে Html এর ID সিলেক্ট করা হইয়েছে

        **_Call API Section Explain_**
        1. const callAPI -> এখানে API কল করা হয়েছে
        2. apiReqst = new XMLHttpRequest() -> এখানে XMLHttpRequest করা হয়েছে
        3. apiReqst.open("GET", callAPI);
        3. apiReqst.onreadystatechange