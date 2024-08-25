/* 
    |> OverRidng
        * একটা ডাটা কে অন্য ডাটা দিয়ে রিপ্লেস করে দেওয়া 
        * Parent Method এর ডাটা কে child method এ  অন্য ডাটা দিয়ে রিপ্লেস করে দেওয়া, সেইটাকে Method OverRidng বলে
        * Parent Method এর ডাটা কে child method OverRide করলে, তখন child Parent এর ডাটা পাবে না। 
*/

class parent {
  addNum() {
    let num1 = 10;
    let num2 = 20;
    console.log(num1 + num2);
  }
}

class child extends parent {
  addNum() {
    let num1 = 120;
    let num2 = 120;
    console.log(num1 + num2);
  }
}

/* let childObj = new child();
childObj.addNum(); */

let parentObj = new parent();
parentObj.addNum();
