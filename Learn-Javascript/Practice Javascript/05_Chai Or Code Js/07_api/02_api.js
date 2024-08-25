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
